import React, {useState, useContext, useDeferredValue} from 'react'
import SafelockEntry from '../safelocks/SafelockEntry.jsx'
import InlineFilterDisplay from '../filters/InlineFilterDisplay'
import DataContext from '../context/DataContext'
import ProfileHeader from '../profile/ProfileHeader.jsx'

function SafelocksCollectionPage({profile}) {
    const [expanded, setExpanded] = useState(false)
    const {visibleEntries = []} = useContext(DataContext)
    const defExpanded = useDeferredValue(expanded)

    console.log('visibleEntries', visibleEntries)

    return (
        <div style={{
            maxWidth: 700, padding: 0, backgroundColor: '#222',
            marginLeft: 'auto', marginRight: 'auto', marginTop: 16
        }}>

            <ProfileHeader profile={profile} page={'safelocks'}/>
            <InlineFilterDisplay profile={profile} collectionType={'safelocks'}/>

            { visibleEntries?.map(entry =>
                    <SafelockEntry
                        key={entry.id}
                        entry={entry}
                        expanded={entry.id === defExpanded}
                        onExpand={setExpanded}
                    />
                )
            }
        </div>
    )
}

export default SafelocksCollectionPage
