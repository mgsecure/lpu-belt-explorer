import React, {useCallback, useContext, useMemo} from 'react'
import Button from '@mui/material/Button'
import {useLocation, useNavigate} from 'react-router-dom'
import SystemMessageContext from './SystemMessageContext.jsx'

import MoodIcon from '@mui/icons-material/Mood'
import InfoIcon from '@mui/icons-material/Info'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import DBContext from '../app/DBContext.jsx'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function SystemMessage({override, overridePageId, placeholder}) {
    const {lockCollection, addToLockCollection} = useContext(DBContext)
    const {getMessage} = useContext(SystemMessageContext)

    const location = useLocation()
    const pageId = overridePageId ? overridePageId : location.pathname
    const message = useMemo(() => override
            ? override
            : getMessage(pageId)
                ? getMessage(pageId)
                : placeholder
        , [getMessage, override, pageId, placeholder])

    const navigate = useNavigate()
    const handleClick = useCallback(() => {
        if (!override) {
            navigate(message['linkDestination'])
        }
    }, [message, navigate, override])

    const handleDismiss = useCallback(async () => {
        if (!override) {
            await addToLockCollection('dismissedMessages', message?.id)
        }
    }, [addToLockCollection, message, override])

    const messageHeader = message?.messageHeadline
    const messageText = message?.messageText

    const messageColors = {
        'Good News': '#75ae55',
        'Neutral': '#999',
        'Info': '#609cce',
        'Alert': '#d03f3f',
        'Placeholder': '#555'
    }
    const messageIcons = {
        'Good News': <MoodIcon fontSize='medium'/>,
        'Neutral': <InfoOutlinedIcon fontSize='medium'/>,
        'Info': <InfoIcon fontSize='medium'/>,
        'Alert': <ReportProblemIcon fontSize='small'/>,
        'Placeholder': null
    }

    const messageColor = messageColors[message?.messageType]
    const messageIcon = messageIcons[message?.messageType]
    const textColor = message?.textColor ? message.textColor : '#fff'

    const messageTypeStyle = {
        width: 30,
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: 10,
        backgroundColor: messageColor,
        display: 'flex',
        justifyContent: 'center'
    }

    const mainMargin = override ? '0px auto 0px auto' : '25px auto 25px auto'

    if (!message) return null
    return (
        <div style={{
            minWidth: '320px', maxWidth: 680,
            margin: mainMargin,
            textAlign: 'center'
        }}>
            <div style={{
                fontSize: '1rem',
                lineHeight: '1.2rem',
                width: '100%',
                textAlign: 'left',
                marginTop: 15,
                border: `1px solid ${messageColor}`,
                display: 'flex',
                alignItems: 'center', position: 'relative'
            }}>
                <div style={messageTypeStyle}>{messageIcon}</div>
                <div style={{width: '100%'}}>
                    <div style={{height: '100%', width: '100%', padding: '10px 20px 5px 50px', color: textColor}}>
                        <b>{messageHeader}</b> {messageText}
                    </div>
                    <div style={{width: '100%', textAlign: 'right', padding: '3px 20px 8px 0px'}}>
                        {message.linkText &&
                            <Button variant='text' size='small'
                                    style={{
                                        lineHeight: '.9rem',
                                        textAlign: 'left',
                                        marginRight: 10,
                                        color: messageColor
                                    }}
                                    onClick={handleClick}
                            >{message.linkText}</Button>
                        }
                        {!message.noDismiss && Object.keys(lockCollection).length > 0 &&
                            <Button variant='text' size='small'
                                    style={{
                                        lineHeight: '.9rem',
                                        textAlign: 'left',
                                        color: '#999'
                                    }}
                                    onClick={handleDismiss}
                            >Dismiss</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemMessage
