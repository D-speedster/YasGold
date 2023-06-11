import React from 'react'
import './Vitrin.css'
import propTypes from 'prop-types';
export default function Vitrin({title , img}) {
  return (
    <div className='col-lg-4'>
        <div className='card'>
        <img src={img} className="card-img-top px-4 mt-3 img-bod" alt="..."/>
        <div className="card-body text-center">
        <h3 className="card-title card-titlep">{title}</h3>
        <img className='underline_style' src='img/underline.png'/>
        <p className="card-text card-texts">مشاهده انواع مدل در این زمینه </p>
        </div>
        </div>
    </div>
  )
}

// Vitrin.propTypes={
//   img : propTypes.oneOf(['img/servisarus.jpg','img/HalgehSet.jpg'])
// }
