import React from 'react';
import "./styles.css"
import { Parallax } from 'react-parallax';
import PageTitle from '../pageTitle';
import AboutMeContainer from '../aboutMeContainer'

const Container = () => {
    return <>
    <Parallax bgImage={process.env.PUBLIC_URL + '/images/backgroundPhoto.jpg'} >
    <div className="parallax title-parallax"> 
    <PageTitle/> 
    </ div> 
    </Parallax> 
   <AboutMeContainer /> 
    </>
}

export default Container