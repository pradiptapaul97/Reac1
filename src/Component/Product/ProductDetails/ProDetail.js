import React from 'react';
import {Container} from 'react-bootstrap'
import Navigation from '../../Layout/Navigation'
import Pdgrid from './Pdgrid'


const ProDetail = () =>
{
    return(
        <>
        <Navigation/>
        <Container>
            <h1 style={{textAlign:"center"}}>Product Details</h1>
            <Pdgrid/>
        </Container>
        
        </>
    )

    
}

export default ProDetail