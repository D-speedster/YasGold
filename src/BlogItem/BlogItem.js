import React from 'react';
import './BlogItem.css';

export default function BlogItem({img , title , text}) {
  return (
 
        <div className='col-lg-4'>
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body style-blog">
        <div className='card-title'><h5>{title}</h5></div>
        <p className="card-text">{text}</p>
        </div>
        <div className='card-footer footer-blog'>
          <button>اطلاعات بیشتر</button>
        </div>
      </div>
        </div>
        

  )
}
