import React from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomImg = styled.img`
    border-radius: 2rem;
    width: 40rem;
    height: 25rem;
`

const SpaceImage = (prop) => {
    console.log(prop)
    return (
        <div> 
            <CustomImg src={prop.url} alt="Daily Space Pic" />
        </div>
    );
}

export default SpaceImage;