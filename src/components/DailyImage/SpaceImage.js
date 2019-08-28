import React from "react";

const SpaceImage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>🚀SPAAAAAAAAAAAACE🚀</h1>
            <h2>{props.title}</h2>
            <img src={props.url} />
            <p>{props.explanation}</p>
        </div>
    );
}

export default SpaceImage;