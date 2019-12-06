import React from "react";

function ChartMap(props) {
    const {playerData} = props

    return (
        <div>
            {props.playerData.map(playerData => (
                <div key={playerData.}>
            ))}
        </div>
    )
}

export default ChartMap;