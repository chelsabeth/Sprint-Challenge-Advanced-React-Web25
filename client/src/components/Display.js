import React, { useEffect } from "react";

function Display(props) { 
    const { data } = props;
    useEffect(() => {
        console.log("coming from Display.js: ", data);
    }, [data]);
    
    return (
        <div className="card-container">
        {props.data.map(data => (
            <div className="individual-card" key={data.id}>
                <h2>Name: {data.name}</h2>
                <p>Country: {data.country}</p>
                <p>Amout of Searches: {data.searches}</p>
            </div>
        ))}
        </div>
    )
}

export default Display;