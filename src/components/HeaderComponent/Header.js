import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(prop){
    console.log(prop);
    const [headerState] = useState("Space, the Final Frontier");

    const CustomH1 = styled.h1`
        margin: 2rem;
        font-size: 6rem;
    `

    const CustomH2 = styled.h2`
        margin: 3rem;
        font-size: 3.5rem;
        color: gray;
        font-style: bold;
    `

    const CustomH3 = styled.h3`
        margin: 0rem 5rem 0rem 5rem;
        font-size: 2rem;
    `

    const CustomH4 = styled.h4`
        font-style: italic;
        margin-bottom: 2rem;
    `

    return (
      <>
        <CustomH1>{headerState}</CustomH1>
        <CustomH2>Daily Pictures From Space</CustomH2>
        <CustomH3>{prop.title}</CustomH3>
        <CustomH4>{prop.date}</CustomH4>
      </>
    );
}

export default Header;