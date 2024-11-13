import SortTextButton from './SortTextButton.jsx'
import FilterTextButton from './FilterTextButton.jsx'
import Button from '@mui/material/Button'
import React, {useCallback, useContext} from 'react'
import useWindowSize from '../util/useWindowSize.jsx'
import FilterContext from '../context/FilterContext.jsx'
import Box from '@mui/material/Box'

function ViewFilterButtons({sortValues, extraFilters = []}) {

    const {filters, filterCount, clearAllFilters} = useContext(FilterContext)
    const {sort} = filters

    const reset = sort || filterCount > 0
    const handleReset = useCallback(() => {
        clearAllFilters()
    }, [clearAllFilters])


    const {width} = useWindowSize()
    const smallWidth = width <= 500

    const buttonPaddingTop = !smallWidth ? 0 : 3
    const buttonMarginBottom = !smallWidth ? 0 : 2
    const buttonWidth = !smallWidth ? 60 : 80

    return (
        <Box style={{
            display: 'flex',
            paddingTop: buttonPaddingTop,
            marginBottom: buttonMarginBottom,
            marginLeft: 0,
            justifyContent: 'center'
        }}
             sx={{
                 '.MuiBadge-anchorOriginTopRightRectangular': {
                     marginBottom: '5px'
                 },
                 '.MuiButton-root': {
                     minWidth: buttonWidth
                 }
             }}
        >
            <SortTextButton sortValues={sortValues}/>
            <FilterTextButton extraFilters={extraFilters}/>
            {reset &&
                <Button color='inherit' style={{color: '#bbb'}} onClick={handleReset}>
                    RESET</Button>
            }
        </Box>
    )
}

export default ViewFilterButtons