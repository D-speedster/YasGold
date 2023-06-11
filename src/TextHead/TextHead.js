import React from 'react'
import './TextHead.css';

export default function TextHead({title , img}) {
  return (
    <div className='Text_Head'>

        
        <img className='underline_img' src='img/underline.png'/>
        <p>{title}</p>

    </div>
  )
}
