import React from 'react'
import { useState, useEffect } from 'react';
import { chartIntermediateDataType } from '../prop-types';
import AnimeChart from './AnimeChart';
import '../styles/Chart.css'
interface YearCount {
    year: number;
    count: number;
}

export default function Chart(props: any) {
  const [chartData, setChartData] = useState<Array<YearCount>>([]);
  let chartIntermediateData : chartIntermediateDataType[] = [];

  props?.animesList?.map((anime: any) => {
    chartIntermediateData = [...chartIntermediateData, {
        year: anime?.year,
        title: anime?.title  
    }]
  })

  
interface YearCount {
    year : number;
    count: number;
  }
  
  const yearCounts = chartIntermediateData.reduce((counts: { [key: number]: number }, item: chartIntermediateDataType) => {
    if (item.year !== null) {
      counts[item.year] = (counts[item.year] || 0) + 1;
    }
    return counts;
  }, {});
  

const data: YearCount[] = Object.entries(yearCounts).map(([year, count]) => ({
    year: parseInt(year, 10),
    count
}));
    useEffect(() => {    
    setChartData(data)
    }, [chartData])
  return (
    <div>
        {chartData ? <AnimeChart chartData = {chartData} /> : 'loading'}
    </div>
  )
}
