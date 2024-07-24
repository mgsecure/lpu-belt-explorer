import React, {useState, useMemo, useContext, useCallback} from 'react'
import Button from '@mui/material/Button'
import DBContext from '../app/DBContext.jsx'
import ScorecardRow from './ScorecardRow.jsx'
import ScorecardDataContext from './ScorecardDataProvider'
import InlineScorecardCharts from './InlineScorecardCharts'
import ScorecardDanStats from './ScorecardDanStats.jsx'
import useWindowSize from '../util/useWindowSize.jsx'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ImportDanSheetForm from './ImportDanSheetForm.jsx'
import EvidenceForm from './EvidenceForm.jsx'

function Scorecard({owner, profile}) {
    const {isMobile} = useWindowSize()

    const scorecardName = profile?.displayName
        ? profile.displayName.slice(-1).toLowerCase() === 's'
            ? profile.displayName + '\''
            : profile.displayName + '\'s'
        : 'User'

    const {visibleEntries = [], cardEvidence, cardBBCount, cardDanPoints} = useContext(ScorecardDataContext)
    const {createEvidenceForEntries, removeAllEvidence} = useContext(DBContext)

    const [expanded, setExpanded] = useState(false)
    const [controlsExpanded, setControlsExpanded] = useState(false)
    const [controlForm, setControlForm] = useState('import')

    const recordedIdsToMerge = useMemo(() => {
        if (profile && profile.recorded) {
            const evIds = cardEvidence.map(ev => ev.matchId)
            return profile.recorded.filter(id => !evIds.includes(id))
        } else {
            return []
        }
    }, [profile, cardEvidence])

    const handleMergeRecorded = useCallback(() => {
        createEvidenceForEntries(recordedIdsToMerge)
        setControlsExpanded(false)
    }, [createEvidenceForEntries, recordedIdsToMerge])

    const handleDeleteAll = useCallback(() => {
        removeAllEvidence()
    }, [removeAllEvidence])


    const handleOpenControls = useCallback((controlForm) => {
        setControlForm(controlForm)
        setControlsExpanded(!controlsExpanded)
    }, [controlsExpanded])


    const buttonsMargin = isMobile ? 10 : 40
    const headerDivStyle = isMobile ? 'block' : 'flex'
    return (
        <div style={{
            maxWidth: 700, padding: 0, backgroundColor: '#222',
            marginLeft: 'auto', marginRight: 'auto', marginTop: 16
        }}>
            <div style={{fontSize: '24px', lineHeight: '26px', padding: 16}}>
                {scorecardName} Scorecard<br/>
            </div>

            {!isMobile
                ? <div style={{display: headerDivStyle, padding: '0px 0px 0px 16px'}}>
                    <div style={{marginRight: 0, width: 350}}>
                        <InlineScorecardCharts profile={profile} entries={visibleEntries}/>
                    </div>
                    <div style={{flexGrow: 1, marginRight: 0}}></div>
                    <ScorecardDanStats cardDanPoints={cardDanPoints} cardBBCount={cardBBCount}/>
                </div>
                : <div style={{display: headerDivStyle, padding: '0px 0px 0px 16px'}}>
                    <ScorecardDanStats cardDanPoints={cardDanPoints} cardBBCount={cardBBCount}/>
                    <div style={{marginRight: 0, width: 350}}>
                        <InlineScorecardCharts profile={profile} entries={visibleEntries}/>
                    </div>
                </div>
            }

            {owner &&
                <Accordion expanded={controlsExpanded} disableGutters={true}>

                    <AccordionSummary style={{
                        paddingLeft: buttonsMargin,
                        paddingRight: buttonsMargin,
                        display: 'flex',
                        placeItems: 'center',
                        width: '100%'
                    }}>
                        <div style={{width: '33%', textAlign: 'center'}}>
                            <Button color='secondary' size='small' style={{lineHeight: '1rem'}}
                                    onClick={handleMergeRecorded}>MERGE RECORDED&nbsp;({recordedIdsToMerge.length})
                            </Button>
                        </div>

                        <div style={{width: '33%', textAlign: 'center'}}>
                            { cardEvidence.length > 0
                                    ? <Button color='secondary' size='small' style={{lineHeight:'1rem'}} onClick={handleDeleteAll}>DELETE ALL</Button>
                                    : <Button color='secondary' size='small' style={{lineHeight:'1rem'}} onClick={() => handleOpenControls('import')}>
                                        IMPORT DAN SHEET
                                    </Button>
                            }
                        </div>

                        <div style={{width: '33%', textAlign: 'center'}}>
                            <Button color='secondary' size='small' style={{lineHeight:'1rem'}} onClick={() => handleOpenControls('project')}>ADD PROJECT</Button>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails style={{backgroundColor: '#333'}}>
                        {controlForm === 'import' &&
                            <ImportDanSheetForm setControlsExpanded={setControlsExpanded}/>
                        }
                        {controlForm === 'project' &&
                            <EvidenceForm evid={null} handleUpdate={handleOpenControls} addProject={true}/>
                        }
                    </AccordionDetails>

                </Accordion>
            }

            <div>
                {visibleEntries.map(ev =>
                    <ScorecardRow key={ev.id}
                                  owner={owner}
                                  evid={ev}
                                  expanded={ev.id === expanded}
                                  onExpand={setExpanded}
                    />
                )}
            </div>
        </div>
    )
}

export default Scorecard
