import React from 'react';
import './videoShow.css';


export default function videoShow(prop) {
  return (
    <div className='row'>
        <div className='col-lg-6'>
        <video className='img-fluid' loop="{true}" autoPlay="autoplay">
                <source src='video/1.mp4'></source>
            </video>
        </div>
        <div className='col-lg-6'>
            <video className='img-fluid' loop="{true}" autoPlay="autoplay">
                <source src='video/2.mp4'></source>
            </video>
        </div>
    </div>
  )
}
