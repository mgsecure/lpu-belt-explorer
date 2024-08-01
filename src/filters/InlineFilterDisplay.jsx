import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, {useCallback, useContext, useMemo} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {useParams} from 'react-router-dom'
import {validCollectionTypes} from '../data/collectionTypes'
import getAnyCollection from '../util/getAnyCollection'
import FilterDisplay from './FilterDisplay'
import FilterContext from '../context/FilterContext'
import ClearFiltersButton from './ClearFiltersButton'
import useWindowSize from '../util/useWindowSize'
import InputLabel from '@mui/material/InputLabel'

function InlineFilterDisplay({profile = {}}) {
    const {userId} = useParams()
    const {filters, filterCount, addFilter} = useContext(FilterContext)
    const [open, setOpen] = React.useState(false)

    const anyCollection = useMemo(() => getAnyCollection(profile), [profile])

    const {collection = (userId && filterCount === 0 ? 'Any' : null)} = filters
    const {isMobile} = useWindowSize()
    const style = isMobile
        ? {maxWidth: 700, borderRadius: 0}
        : {maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', borderRadius: 0}

    let currentCollection = ''
    if (collection) {
        if (typeof collection === 'string') {
            currentCollection = collection
        } else {
            currentCollection = collection[0]
        }
    }

    const handleClose = useCallback(() => setOpen(false), [])
    const handleOpen = useCallback(() => setOpen(true), [])

    const handleChange = useCallback(event => {
        addFilter('collection', event.target.value, true)
    }, [addFilter])

    if (!filterCount && !userId) return null
    const isValidCollection = typeof collection === 'string' &&
        (collectionTypes.includes(collection) || collection === 'Any') && filterCount < 2

    return (
        <Card style={style} sx={{paddingBottom: 0, paddingTop: 2}}>
            <CardContent style={{paddingTop: 0, paddingLeft: 8}}>
                {
                    isValidCollection &&
                    <div style={{display: 'flex'}}>
                        <FormControl fullWidth size='small' color='secondary' sx={{marginLeft: '8px', minWidth: 80, maxWidth: 300}}>
                            <InputLabel id={'label'}>Collection</InputLabel>
                            <Select
                                name='collection-selector'
                                label={'Collection'}
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={currentCollection}
                                onChange={handleChange}
                                style={{backgroundColor: '#222', fontSize: '1.1rem', fontWeight: 500}}
                                color='secondary'
                            >
                                {collectionTypes.map((list, index) =>
                                    <MenuItem key={index} value={list}>
                                        {list} ({list === 'Any' ? anyCollection.length : profile[list.toLowerCase()]?.length || 0})
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <div style={{flexGrow: 1, marginTop:2, marginLeft:15}}>
                            <ClearFiltersButton/>
                        </div>
                    </div>
                }
                {
                    !isValidCollection &&
                    <FilterDisplay/>
                }
            </CardContent>
        </Card>
    )
}

const collectionTypes = ['Any', ...validCollectionTypes]

export default InlineFilterDisplay
