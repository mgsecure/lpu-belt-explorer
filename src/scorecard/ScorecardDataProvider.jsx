import React, {useContext, useMemo} from 'react'
import fuzzysort from 'fuzzysort'
import ScorecardDataContext from '../context/DataContext'
import FilterContext from '../context/FilterContext'
import dayjs from 'dayjs'
import {beltSort, beltSortReverse} from '../data/belts'
import removeAccents from 'remove-accents'
import allEntries from '../data/data.json'
import {getEntryFromId, getProjectEntryFromId} from '../entries/entryutils'

export function ScorecardDataProvider({children, cardEvidence, cardBBCount, cardDanPoints, cardEligibleDan, cardNextDanPoints, cardNextDanLocks}) {
    const {filters: allFilters} = useContext(FilterContext)
    const {search, id, tab, name, sort, image, ...filters} = allFilters

    const allEvidenceEntries = useMemo(() => cardEvidence.map(evidenceEntry =>
        {
            const entry = getEntryFromId(evidenceEntry.matchId)
            const projectEntry = getProjectEntryFromId(evidenceEntry.matchId)
            return {...entry, ...evidenceEntry, ...projectEntry, id: evidenceEntry.id}
        }
    ), [cardEvidence])

    const mappedEntries = useMemo(() => {
        return allEvidenceEntries
            .map(entry => ({
                ...entry,
                makes: entry?.makeModels?.map(({make}) => make),
                fuzzy: removeAccents(
                    entry?.makeModels?.map(({make, model}) => [make, model])
                        .flat()
                        .filter(a => a)
                        .concat([
                            entry.version,
                            entry.notes,
                            entry.belt
                        ])
                        .join(',')
                    + ' '
                ),
                documentation: [
                    entry.exceptionType === 'badlink' ? 'Bad Link' : 'Valid Link',
                    entry.date ? 'Valid Date' : 'No Date'
                ],
                scoring: [
                    entry.exceptionType === 'nomatch' ? 'Unmatched' :
                    entry.exceptionType === 'badlink' ? 'Bad Link' :
                    entry.exceptionType === 'duplicate' ? 'Duplicate' :
                    entry.exceptionType === 'upgraded' ? 'Upgraded' :
                    ['White', 'Yellow', 'Orange', 'Green'].includes(entry.belt) ? 'Low Level' :
                    'Worth Points'
                ],
                simpleBelt: entry?.belt?.replace(/\s\d/g, '')
            }))
    }, [allEvidenceEntries])

    const visibleEntries = useMemo(() => {
        // Filters as an array
        const filterArray = Object.keys(filters)
            .map(key => {
                const value = filters[key]
                return Array.isArray(value)
                    ? value.map(subkey => ({key, value: subkey}))
                    : {key, value}
            })
            .flat()

        // Filter the data
        const filtered = mappedEntries
            .filter(datum => {
                return filterArray.every(({key, value}) => {
                    return Array.isArray(datum[key])
                        ? datum[key].includes(value)
                        : datum[key] === value
                })
            })

        // If there is a search term, fuzzy match that
        const searched = search
            ? fuzzysort.go(removeAccents(search), filtered, {keys: fuzzySortKeys, threshold: -25000})
                .map(result => ({
                    ...result.obj,
                    score: result.score
                }))
            : filtered

        return sort
            ? searched.sort((a, b) => {
                if (sort === 'danPointsAscending') {
                    return a.points - b.points
                        || dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                } else if (sort === 'danPointsDescending') {
                    return b.points - a.points
                        || dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                } else if (sort === 'dateAscending') {
                    return dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
                        || beltSortReverse(a.simpleBelt, b.simpleBelt)
                } else if (sort === 'dateDescending') {
                    return dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                        || beltSortReverse(a.simpleBelt, b.simpleBelt)
                } else if (sort === 'beltAscending') {
                    return beltSort(a.belt, b.belt)
                        || dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                } else if (sort === 'beltDescending') {
                    return beltSortReverse(a.belt, b.belt)
                        || dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                } else if (sort === 'alphaAscending') {
                    return a.fuzzy.localeCompare(b.fuzzy)
                        || b.points - a.points
                } else if (sort === 'alphaDescending') {
                    return b.fuzzy.localeCompare(a.fuzzy)
                        || b.points - a.points
                }
            })
            : searched.sort((a, b) => {
                return dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                    || beltSortReverse(a.belt, b.belt)
                    || a.fuzzy.localeCompare(b.fuzzy)
            })
    }, [filters, mappedEntries, search, sort])

    const value = useMemo(() => ({
        allEntries,
        cardEvidence,
        cardBBCount,
        cardDanPoints,
        cardEligibleDan,
        cardNextDanPoints,
        cardNextDanLocks,
        visibleEntries,
        getEntryFromId,
        getProjectEntryFromId
    }), [cardEvidence, cardBBCount, cardDanPoints, cardEligibleDan, cardNextDanPoints, cardNextDanLocks, visibleEntries])

    return (
        <ScorecardDataContext.Provider value={value}>
            {children}
        </ScorecardDataContext.Provider>
    )
}

const fuzzySortKeys = ['fuzzy']

export default ScorecardDataContext
