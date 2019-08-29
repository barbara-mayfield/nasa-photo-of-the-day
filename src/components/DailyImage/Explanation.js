import React from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Explanation = (prop) => {
    console.log(prop)

    const CustomPara = styled.p`
        margin: 2rem;
        padding: 2rem;
        text-align: justify;
    `

    return (
            <CustomPara>{prop.explanation}</CustomPara>
    );
}

export default Explanation;