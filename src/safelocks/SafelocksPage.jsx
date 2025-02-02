import React, {useCallback, useContext, useDeferredValue, useState} from 'react'
import DataContext from '../context/DataContext'
import InlineFilterDisplay from '../filters/InlineFilterDisplay'
import NoEntriesCard from '../locks/NoEntriesCard'
import SafelockEntry from './SafelockEntry.jsx'

function SafelocksPage({profile}) {
    const [expanded, setExpanded] = useState(false)
    const {visibleEntries} = useContext(DataContext)

    const defExpanded = useDeferredValue(expanded)

    const handleExpand = useCallback(id => {
        setExpanded(id)
    }, [])

    return (
        <div style={{margin: 8, paddingBottom: 32}}>
            <InlineFilterDisplay profile={profile} collectionType={'safelocks'}/>

            {visibleEntries.length === 0 && <NoEntriesCard label='Dials'/>}

            {visibleEntries.map(entry =>
                <SafelockEntry
                    key={entry.id}
                    entry={entry}
                    onExpand={handleExpand}
                    expanded={entry.id === defExpanded}
                />
            )}
        </div>
    )
}

export default SafelocksPage
