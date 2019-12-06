import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function Chart(props){
    const {searches} = props
 
    return (
        <LineChart width={600} height={300} data={searches}>
            <Line type="monotone" dataKey="value" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="name"/>
            <YAxis/>
        </LineChart>
    )
}

export default Chart;
