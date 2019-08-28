import React, { useState } from "react";
import axios from 'axios';
import SpaceImage from './components/DailyImage/SpaceImage'
import "./App.css";

function App() {
  const [title, setTitle] = useState('');
  console.log("top");
  axios.get('https://api.nasa.gov/planetary/apod?api_key=EftiSMpbnRmD444w7EM7AK0KacuxQicHZ53m8BkF')
    .then(res => {
      console.log(res.data);
      setTitle(res.data.title);
    })
  console.log("bottom");

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <SpaceImage title="Props Title"
                  url="Not a url lol"
                  explanation="an explanation" />
    </div>
  );
}

export default App;
