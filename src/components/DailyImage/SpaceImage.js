import React from "react";

const SpaceImage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Space, the Final Frontier</h1>
            <h2>{props.title}</h2>
            <img src={props.url} alt="Daily Space Pic" />
            <p>{props.explanation}</p>
        </div>
    );
}

export default SpaceImage;