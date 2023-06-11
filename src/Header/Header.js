

import React from 'react'
import Navbar from './navbar'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
    <Navbar></Navbar>
    <div className='container'>
    <div className='d-flex head'>
        <img src='img/24.png'></img>
        <ul className='nav'>
            
            <li>صفحه اصلی</li>
            <li>محصولات</li>
            <li>شرایط فروش</li>
            <li>تماس باما</li>
            <li>وبلاگ</li>
            <li>راهنمای خرید</li>
            <li>درباره ما</li>
        </ul>


    </div>
    <div className='container'>
        <img src='img/1654793920.jpg' className='img-fluid'></img>
    </div>
    </div>
    </div>
   
  )
}
