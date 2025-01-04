import React from 'react'
import LoadingDisplay from '../../util/LoadingDisplay'
import useData from '../../util/useData'
import usePageTitle from '../../util/usePageTitle'
import useWindowSize from '../../util/useWindowSize'
import dayjs from 'dayjs'
import {siteFullNew, raflResponseDetails} from '../../data/dataUrls'
import RaffleSummary from './RaffleSummary.jsx'
import RafflePageTrackingTable from './RafflePageTrackingTable.jsx'
import RafflePotTable from './RafflePotTable.jsx'
import RaffleCharityTable from './RaffleCharityTable.jsx'
import RaffleReportHistoricalLines from './RaffleReportHistoricalLines.jsx'
import RaffleStatsHeader from '../RaffleStatsHeader.jsx'
import RaffleBeltDistribution from './RaffleBeltDistribution.jsx'
import RaffleYOYLines from './RaffleYOYLines.jsx'

function RaffleReport() {
    usePageTitle('RAFL Report')
    const {data, loading, error} = useData({urls})
    const {siteFullNew, raflResponseDetails} = data || {}
    const {width} = useWindowSize()
    const smallWindow = width < 560
    const pagePadding = !smallWindow
        ? '24px 24px 32px 24px'
        : '8px 8px 32px 8px'

    const firstHeaderStyle = {
        margin: '0px 0px 36px 0px',
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1.3rem',
        fontWeight: 700
    }
    const headerStyle = {
        margin: '46px 0px 18px 0px', width: '100%', textAlign: 'center', color: '#fff', fontSize: '1.3rem',
        fontWeight: 700
    }
    const summaryHeaderStyle = firstHeaderStyle

    const updateTime = loading ? '--'
        : '(updated: ' + dayjs(raflResponseDetails?.metadata['updatedDateTime']).format('MM/DD/YY hh:mm') + ')'

    if (loading) return <LoadingDisplay/>
    else if (error) return null
    return (
        <div style={{
            minWidth: '320px', maxWidth: 900, height: '100%',
            padding: pagePadding, backgroundColor: '#292929',
            marginLeft: 'auto', marginRight: 'auto',
            fontSize: '1.0rem'
        }}>
            <div style={summaryHeaderStyle}>
                RAFL REPORT<br/>
                <span style={{fontSize: '0.85rem'}}>{updateTime}</span>
            </div>

            <RaffleStatsHeader/>
            <div style={{height:20}}/>
            <RaffleSummary data={siteFullNew}/>

            <div style={headerStyle}>Totals Over Time</div>
            <RaffleYOYLines data={raflResponseDetails?.detailedData}/>
            <RaffleReportHistoricalLines data={raflResponseDetails?.detailedData}/>

            <div style={headerStyle}>Belt Distribution</div>
            <RaffleBeltDistribution data={raflResponseDetails?.summaryData}/>

            <div style={headerStyle}>Page Tracking</div>
            <RafflePageTrackingTable data={siteFullNew}/>

            <div style={headerStyle}>Pot Details</div>
            <RafflePotTable statsData={siteFullNew}/>

            <div style={headerStyle}>Charity Details</div>
            <RaffleCharityTable data={siteFullNew}/>

        </div>
    )
}

const urls = {
    siteFullNew,
    raflResponseDetails
}

export default RaffleReport
