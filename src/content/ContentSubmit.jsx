import React, {useState} from 'react'
import dayjs from 'dayjs'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import LockEntrySearchBox from './LockEntrySearchBox.jsx'
import axios from 'axios'
import Dropzone from 'react-dropzone-uploader'
import './dropzone.css'
import allEntries from '../data/data.json'

function ContentSubmit({profile}) {

    const [lockDetails, setLockDetails] = useState({})
    const [userName, setUserName] = useState(profile.displayName)
    const [droppedFiles, setDroppedFiles] = useState([])
    const [update, setUpdate] = useState(false)

    const dt = dayjs().format('YYYYMMDD-HHMMss')
    const entry = allEntries.find(e => e.id === lockDetails?.lockId)
    const uploadable = (!!lockDetails?.lockName && !!lockDetails?.lockId && !!userName && droppedFiles.length > 0)

    const handleFileUpload = async (event) => {
        event.preventDefault()
        const prefix = `${lockDetails.lockName}_${lockDetails.lockId}_${userName}`.replace('/', '+')
        const uploadsDir = `${dt}_${prefix}`

        const formData = new FormData()
        droppedFiles.forEach((file) => {
            formData.append('files', file, `${uploadsDir}/${prefix}_${file.name}`)
            console.log('file', file)
        })
        formData.append('lockFullName', lockDetails.lockFullName)
        formData.append('lockName', lockDetails.lockName)
        formData.append('version', entry.version)
        formData.append('lockId', lockDetails.lockId)
        formData.append('userName', userName)
        formData.append('displayName', profile.displayName)
        formData.append('uploadsDir', `${dt}_${prefix}`)
        formData.append('notes', event.target.notes.value)

        await axios.post('http://content.lpubelts.com:8080/api/upload', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(response => {
                console.log('response', response)
            })
            .catch(error => {
                console.error('error', error)
            })

    }

    const handleChangeStatus = ({meta, file}, status) => {
        console.log(status, meta, file)
        if (status === 'done') {
            setDroppedFiles([...droppedFiles, file])
        } else if (status === 'removed') {
            setDroppedFiles(droppedFiles.filter(e => e.name !== file.name))
        }
        setUpdate(!update)
    }

    const handleSubmit = (files, allFiles) => {
        console.log('files', files.map(f => f.meta))
        setDroppedFiles(files.map(f => f.file))
        handleFileUpload()
        allFiles.forEach(f => f.remove())
    }

    return (

        <div style={{
            maxWidth: 700, padding: 0,
            marginLeft: 'auto', marginRight: 'auto', marginTop: 16
        }}>

            <form action='http://content.lpubelts.com:8080/api/upload' encType='multipart/form-data' method='post'
                  onSubmit={handleFileUpload}>

                <div>

                    <div style={{fontSize: '1.5rem', fontWeight: 500, marginBottom: 10}}>Select Lock</div>
                    <LockEntrySearchBox setLockDetails={setLockDetails} allEntries={allEntries}/>

                    <br/><br/>

                    <div style={{display: 'flex'}}>
                        <div style={{marginRight: 50}}>
                            <div style={{fontSize: '1.5rem', fontWeight: 500, marginBottom: 10}}>Files to Upload<br/>
                            </div>
                            <Dropzone
                                //getUploadParams={getUploadParams}
                                onChangeStatus={handleChangeStatus}
                                onSubmit={handleSubmit}
                                accept='image/*,audio/*,video/*'
                                SubmitButtonComponent={null}
                                styles={{
                                    dropzone: {minHeight: 200, maxHeight: 500, width: 250}
                                }}
                                disabled={files => files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}

                            />
                        </div>
                        <div>
                            <div style={{fontSize: '1.5rem', fontWeight: 500, marginBottom: 10}}>Details<br/></div>
                            {lockDetails.lockFullName &&
                                <span>
                                    <span style={{fontSize: '0.9rem'}}>Lock Name</span><br/>
                                    <span
                                        style={{fontWeight: 700, fontSize: '1.2rem'}}>{lockDetails.lockFullName}</span>
                                    <br/><br/>
                                </span>
                            }
                            <span style={{fontSize: '0.9rem'}}>User Name</span><br/>
                            <TextField type='text' name='userName' value={userName} style={{width: 400}} color='info'/>
                            <br/><br/>
                            <span style={{fontSize: '0.9rem'}}>Notes</span><br/>
                            <TextField type='text' name='notes' multiline fullWidth rows={3} color='info'/>

                            <br/><br/>

                            <Button type='submit' variant='contained' color='info' disabled={!uploadable}>
                                Upload
                            </Button>

                        </div>
                    </div>
                    <br/><br/>
                </div>
            </form>

        </div>

    )
}

export default ContentSubmit
