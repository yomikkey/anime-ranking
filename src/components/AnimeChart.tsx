import React from 'react'
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";


export default function AnimeChart(props: any) {
    console.log(props)
  return (
    <div>
      <AreaChart width={930} height={350} data={props.chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="20%" stopColor="#79E3A3" stopOpacity={0.8}/>
                <stop offset="80%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <Tooltip /> */}
            <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    </div>
  )
}
