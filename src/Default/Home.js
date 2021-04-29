import React from 'react';
import Navigation from '../Component/Layout/Navigation'
import SimpleSlider from './slider'

const Home = () =>
{

    return(
        <div styles={{backgroundColor:"black"}}>
        <Navigation/>
        <SimpleSlider name="home"/>
        
        <h1>Home</h1>
        </div>
    )
}

export default Home