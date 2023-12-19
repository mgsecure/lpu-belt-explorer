import React from 'react'
import Footer from '../nav/Footer'
import Nav from '../nav/Nav'
import InfoPage from '../info/InfoPage'

function InfoRoute() {
    return (
        <React.Fragment>
            <Nav title='Information'/>

            <InfoPage/>

            <Footer/>
        </React.Fragment>
    )
}

export default InfoRoute
