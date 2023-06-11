
import React from 'react';




import './Last_Product.css';


export default function LastProduct({title , price , img ='img/1.jpg' , col}) {
  return (
    <div className={col}>
    <div className="card px-2 mt-3" >
  <img src={img} className="card-img-top px-3 mt-3" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price} تومان</p>
    {/* <a href="https://google.com" className="btn btn-primary">Go somewhere</a> */}
    <div className={`footer , ${price}`}>
    <i className="bi bi-basket" ></i>
    <i className="bi bi-heart"></i>
    </div>
   
  </div>
</div>
    </div>
  )
}


