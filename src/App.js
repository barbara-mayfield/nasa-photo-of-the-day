import React, { useState, useEffect } from "react";
import axios from 'axios';
import SpaceImage from './components/DailyImage/SpaceImage'
import "./App.css";

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
      <SpaceImage title={data.title}
                  url={data.url}
                  explanation={data.explanation} />
    </div>
  );
}

export default App;
