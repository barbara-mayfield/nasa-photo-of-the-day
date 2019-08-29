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
        margin: 5rem;
        margin-bottom: 2rem;
        font-size: 4rem;
        font-style: italic;
    `

    return (
      <>
        <CustomH1>{headerState}</CustomH1>
        <CustomH2>{prop.title}</CustomH2>
      </>
    );
}

export default Header;