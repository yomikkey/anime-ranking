import React from 'react'
import { mockData } from '../mockData'
import '../styles/Card.css'
import { useState } from 'react'

export default function Card(props : any) {
  const [expand, setExpand] = useState(false)
  const [style, setStyle] = useState({});

  const onMouseEnterHandler = () => {
    setExpand(true)
    setStyle({
      transform: "scale3d(1.5, 1.4, 1)",
      transformOrigin: 'top'
    })
  }

  const onMouseLeaveHandler = () => {
    setExpand(false)
    setStyle({})
  }
  return (
    <div className='card-style' style={expand ? style : {}} onMouseEnter = {onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <img src={props.anime?.images?.jpg?.image_url} alt={props.anime?.image} className='cover-art'/>
      <p className='rank'> {props.anime.rank} 
      { console.log("lates", props.anime)}</p>
      <p className='title'> {props.anime?.title} </p>
      {expand && <div>
        <p className='card-content'><b>Release:</b> {props.anime?.aired?.string?.includes('to') ? props.anime?.aired?.string?.substring(0, props.anime?.aired?.string?.indexOf(' to')) : props.anime?.aired?.string} </p>
        <p className='card-content'><b>Lastest Date:</b> {props.anime?.aired?.string?.includes('to') ? props.anime?.aired?.string?.substring(props.anime?.aired?.string?.indexOf('to ') + 2) : 'now' } </p>
        <p className='card-content'><b>Rating:</b> {props?.anime?.rating} </p>
      </div>}
    </div>
  )
}
