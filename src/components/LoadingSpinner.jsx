// Node Module
import React from 'react';

// Images
import circleLoader from './assets/images/circleLoader.svg';
import lineLoader from './assets/images/lineLoader.svg';
import staticLineLoader from './assets/images/staticLineLoader.svg';

const LoadingSpinner = ({spinner, spinnerStyle}) => {
    switch(spinner){
        case "line" : return (
            <img src={lineLoader} alt="Loading..." style={spinnerStyle}/>
        )
        case "staticLine" : return (
            <img src={staticLineLoader} alt="Loading..." style={spinnerStyle}/>
        )
        default : return ( 
            <img src={circleLoader} alt="Loading..." style={spinnerStyle}/> 
        )
    }
}

export default LoadingSpinner;
