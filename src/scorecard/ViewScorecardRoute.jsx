import React, {useContext, useEffect} from 'react'
import AuthContext from '../app/AuthContext'
import Footer from '../nav/Footer'
import Nav from '../nav/Nav'
import Tracker from '../app/Tracker'
import {useDocumentTitle} from 'usehooks-ts'
import {useNavigate} from 'react-router-dom'
import ProfileNotFound from '../profile/MustBeLoggedIn.jsx'
import LoadingDisplay from '../util/LoadingDisplay.jsx'

function ViewScorecardRoute() {
    const {authLoaded, isLoggedIn, user} = useContext(AuthContext)
    const navigate = useNavigate()

    useDocumentTitle('LPU Belt Explorer - View Scorecard')

    useEffect(() => {
        if (authLoaded && user) {
            navigate(`/profile/${user.uid}/scorecard`)
        }
    }, [authLoaded, navigate, user])

    return (
        <React.Fragment>
            <Nav title='View Scorecard'/>
            {!authLoaded && <LoadingDisplay/>}
            {authLoaded && !isLoggedIn && <ProfileNotFound/>}
            <Footer/>
            <Tracker feature='viewscorecardredirect'/>
        </React.Fragment>
    )
}

export default ViewScorecardRoute
