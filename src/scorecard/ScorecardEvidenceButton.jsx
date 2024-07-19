import React, {useCallback} from 'react'
import IconButton from '@mui/material/IconButton'
import YouTubeIcon from '@mui/icons-material/YouTube'
import DiscordIcon from '../resources/DiscordIcon.jsx'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import SubjectIcon from '@mui/icons-material/Subject'
import Tooltip from '@mui/material/Tooltip'
import WarningIcon from '@mui/icons-material/Warning'

export default function ScorecardEvidenceButton({url, exceptionType, handleChange}) {

    const handleClick = useCallback(event => {
        event.preventDefault()
        event.stopPropagation()
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }, [url])

    let icon = <SubjectIcon style={{width: 20, height: 20}}/>

    if (url.match(/(https|http):\/\/.*(youtu.be|youtube.com)/)) {
        icon = <YouTubeIcon style={{width: 20, height: 20}}/>
    } else if (url.match(/(https|http):\/\/.*discord.com/)) {
        icon = <DiscordIcon style={{width: 20, height: 20}}/>
    } else if (url.match(/(https|http):\/\/.*imgur.com/)) {
        icon = <PhotoCameraIcon style={{width: 20, height: 20}}/>
    }

    return (
        <React.Fragment>
            {exceptionType !== 'badlink' &&
                <Tooltip title='View Documentation' arrow disableFocusListener>
                    <IconButton style={{width: 40, height: 40}} onClick={handleClick}>
                        {icon}
                    </IconButton>
                </Tooltip>
            }
            {exceptionType === 'badlink' &&
                <Tooltip title='Documentation link is not valid' arrow disableFocusListener>
                    <IconButton style={{width: 40, height: 40}} onClick={handleChange}>
                        <WarningIcon style={{width: 22, height: 22, color:'#ef3939'}}/>
                    </IconButton>
                </Tooltip>
            }
        </React.Fragment>
    )
}


