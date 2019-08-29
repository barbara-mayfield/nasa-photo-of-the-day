import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HeaderComponent/Header'
import Explanation from './components/DailyImage/Explanation'
import SpaceImage from './components/DailyImage/SpaceImage'
// import PreviousButton from './components/ButtonComponents/PreviousButton/PreviousButton'
import "./App.css";

const CustomButton = styled.button`
  background: #23314B;
  color: white;
  border: none;
  borderRadius: 4px;
  padding: 18px 15px;
  margin: 0.5rem;

  ${(props) => props.size === 'small' ? 'padding: 0px' : null};
  ${(props) => props.size === 'medium' ? 'padding: 10px 15px' : null};
  ${(props) => props.size === 'large' ? 'padding: 20px 30px' : null};

   &:hover {
     opacity: 0.7
     color: #682F3E;
   }
`

const CustomDiv = styled.div`
   margin: 2rem;
   padding: 2rem;
   background: #1B191A;
   color: #CBCDD3;
`

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log('first render')
    axios.get('https://api.nasa.gov/planetary/apod?api_key=EftiSMpbnRmD444w7EM7AK0KacuxQicHZ53m8BkF')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);


  return (
    <div className="App">
      <CustomDiv>
        <Header title={data.title} />
        <SpaceImage url={data.url} />
        <Explanation explanation={data.explanation}/>
        <CustomButton className="previous-button">Previous Image</CustomButton>
        <CustomButton classNAme="next-button">Next Image</CustomButton>
      </CustomDiv>
    </div>
  );
}

export default App;
