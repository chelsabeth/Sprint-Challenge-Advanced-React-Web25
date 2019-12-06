import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import Display from "./Display";

function Chart(props){
    const {searches} = props
 
    return (
        <LineChart width={1250} height={300} data={searches}>
            <Line type="monotone" dataKey="value" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="name"/>
            <YAxis dataKey="searches"/>
        </LineChart>

    )
}

export default Chart;
