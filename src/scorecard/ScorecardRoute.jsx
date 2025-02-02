import React, {useContext, useCallback, useState} from 'react'
import {useParams} from 'react-router-dom'
import dayjs from 'dayjs'
import useData from '../util/useData.jsx'
import Nav from '../nav/Nav.jsx'
import Footer from '../nav/Footer.jsx'
import Tracker from '../app/Tracker.jsx'
import DBContext from '../app/DBContext.jsx'
import AuthContext from '../app/AuthContext.jsx'
import Scorecard from './Scorecard.jsx'
import LoadingDisplay from '../util/LoadingDisplay.jsx'
import ProfileNotFound from '../profile/ProfileNotFound.jsx'
import {ScorecardDataProvider} from './ScorecardDataProvider.jsx'
import {FilterProvider} from '../context/FilterContext.jsx'
import ScoringContext from '../context/ScoringContext.jsx'
import calculateScoreForUser from '../scorecard/scoring'

import {ScorecardListProvider} from './ScorecardListContext.jsx'
import {scorecardFilterFields} from '../data/filterFields'
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import SearchBox from '../nav/SearchBox.jsx'
import SortButton from '../filters/SortButton.jsx'
import {scorecardSortFields} from '../data/sortFields'
import FilterButton from '../filters/FilterButton.jsx'
import useWindowSize from '../util/useWindowSize.jsx'

function ScorecardRoute() {
    const {userId} = useParams()
    const {user} = useContext(AuthContext)
    const {getProfile, getEvidence} = useContext(DBContext)
    const {scoredEvidence, bbCount, danPoints, eligibleDan, nextDanPoints, nextDanLocks} = useContext(ScoringContext)
    const {isMobile} = useWindowSize()

    const [triggerState, setTriggerState] = useState(false)
    const handleAdminAction = useCallback(() => {
        setTriggerState(!triggerState)
    }, [triggerState])

    const loadFn = useCallback(async () => {
        if (triggerState) {
            // Terrible hack to reload data when an admin takes action to modify
            // another user's scorecard. The dependency array will trigger eval,
            // and this removes lint error without suppressing other dep problems.
            triggerState
        }
        try {
            const profile = await getProfile(userId)
            if (profile) {
                const ownerName = profile.displayName
                    ? profile.displayName.toLowerCase().endsWith('s')
                        ? `${profile.displayName}'`
                        : `${profile.displayName}'s`
                    : 'Anonymous'
                document.title = `LPU Belt Explorer - ${ownerName} Scorecard`
            }

            if (user?.uid !== userId) {
                const evidence = await getEvidence(userId)
                return {profile, ...calculateScoreForUser(evidence)}
            } else {
                return {profile, scoredEvidence, bbCount, danPoints, eligibleDan, nextDanPoints, nextDanLocks}
            }
        } catch (ex) {
            console.error('Error loading profile and evidence.', ex)
            return null
        }
    }, [triggerState, user, userId, getProfile, getEvidence, scoredEvidence, bbCount, danPoints, eligibleDan, nextDanPoints, nextDanLocks])
    const {data = {}, loading, error} = useData({loadFn})

    const profile = data ? data.profile : {}
    const cardEvidence = data ? data.scoredEvidence : []
    const cardBBCount = data ? data.bbCount : 0
    const cardDanPoints = data ? data.danPoints : 0
    const cardEligibleDan = data ? data.eligibleDan : 0
    const cardNextDanPoints = data ? data.nextDanPoints : 0
    const cardNextDanLocks = data ? data.nextDanLocks : 0

    const nav = (
        <React.Fragment>
            <SearchBox label='Scorecard' extraFilters={[{key: 'tab', value: 'search'}]}/>
            <SortButton sortValues={scorecardSortFields}/>
            <FilterButton extraFilters={[{key: 'tab', value: 'search'}]}/>
            {!isMobile && <div style={{flexGrow: 1, minWidth: '10px'}}/>}
        </React.Fragment>
    )

    const title = loading ? 'Loading...' : 'Profile'

    if (loading || error) {
        return null
    }

    return (
        <FilterProvider filterFields={scorecardFilterFields}>
            <ScorecardDataProvider cardEvidence={cardEvidence} cardBBCount={cardBBCount} cardDanPoints={cardDanPoints} cardEligibleDan={cardEligibleDan} cardNextDanPoints={cardNextDanPoints} cardNextDanLocks={cardNextDanLocks}>
                <ScorecardListProvider>
                    <LocalizationProvider adapterLocale={dayjs.locale()} dateAdapter={AdapterDayjs}>

                        <Nav title={title} extras={nav}/>

                        {loading && <LoadingDisplay/>}

                        {!loading && data && !error &&
                            <Scorecard owner={user && user.uid === userId} profile={profile} adminAction={handleAdminAction}/>}

                        {!loading && (!data || error) && <ProfileNotFound/>}

                        <Footer/>
                    </LocalizationProvider>
                    <Tracker feature='scorecard'/>
                </ScorecardListProvider>
            </ScorecardDataProvider>
        </FilterProvider>
    )
}

export default ScorecardRoute