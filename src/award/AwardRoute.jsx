import React, {useContext, useCallback} from 'react'
import useData from '../util/useData.jsx'
import Nav from '../nav/Nav.jsx'
import Footer from '../nav/Footer.jsx'
import Tracker from '../app/Tracker.jsx'
import DBContext from '../app/DBContext.jsx'
import AuthContext from '../app/AuthContext.jsx'
import Award from './Award.jsx'
import LoadingDisplay from '../misc/LoadingDisplay.jsx'
import ProfileNotFound from '../profile/ProfileNotFound.jsx'
import useWindowSize from '../util/useWindowSize.jsx'
import {enqueueSnackbar} from 'notistack'

function AwardRoute() {
    const {user} = useContext(AuthContext)
    const {getProfile} = useContext(DBContext)
    const {isMobile} = useWindowSize()

    const userId = user?.uid
    const loadFn = useCallback(async () => {
        if (!user) return null
        try {
            return await getProfile(userId)
        } catch (ex) {
            console.error('Error loading profile.', ex)
            enqueueSnackbar('Error loading profile, please log in and try again.')
            return null
        }
    }, [user, getProfile, userId])
    const {data = {}, loading, error} = useData({loadFn})

    const isBlackBelt = !!data?.blackBeltAwardedAt

    const nav = (
        <React.Fragment>{!isMobile && <div style={{flexGrow: 1, minWidth: '10px'}}/>}</React.Fragment>
    )

    return (
        <React.Fragment>
            <Nav title='Congratulations!' extras={nav}/>
            {loading && <LoadingDisplay/>}
            {!loading && data && !error && isBlackBelt &&
                <Award profile={data}/>
            }
            {!loading && (!data || error || !isBlackBelt) && <ProfileNotFound/>}
            <Footer/>
            <Tracker feature='award'/>
        </React.Fragment>
    )
}

export default AwardRoute