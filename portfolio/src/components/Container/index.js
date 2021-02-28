import React from 'react';
import { Parallax } from 'react-parallax';

const Container = () => {
    return <Parallax bgImage={process.env.PUBLIC_URL + '/images/backgroundPhoto.jpg'}>
    <div style={{ height: 500}}> 
    <div>HTML inside Parallax</div>
    </ div> 
    </Parallax> 
}

export default Container