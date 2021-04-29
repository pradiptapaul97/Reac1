import React from 'react';
import {Container} from 'react-bootstrap'
import Navigation from '../../Layout/Navigation'
import Pgrid from './Pgrid'


const Products = () =>
{
    return(
        <>
        <Navigation/>
        <Container>
            <h1 style={{textAlign:"center"}}>Products</h1>
            <Pgrid/>
        </Container>
        
        </>
    )

    
}

export default Products