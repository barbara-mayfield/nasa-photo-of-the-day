import React from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpaceImage = (prop) => {
    console.log(prop)
    return (
        <div>
            <h2>{prop.title}</h2> 
            <img src={prop.url} alt="Daily Space Pic" />
            <p>{prop.explanation}</p>
        </div>
    );
}

export default SpaceImage;