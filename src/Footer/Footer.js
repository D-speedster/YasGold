import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        
       <div className='container'>
        <div className='row'>
            <div className='col-lg-6 text-end'>
           
            <ul>
            <h4 className='stt_h4'>ارتباط با ما</h4>
            <li>
            <i className="bi bi-geo-alt emoji-footer"></i>
          <span>تبریز ـ سه راهی امین ـ پاساژ برلیان ـ طبقه همکف - پلاک ۱۱۸</span>
            </li>
            <li>
            <i className="bi bi-telephone-inbound emoji-footer"></i>
              <span>۹۱ ۷۰ ۵۵۶ ۴۱۳ ۹۸+</span>
              </li>
            <li>
            <i className="bi bi-telegram emoji-footer"></i>      
              <span>گروه تلگرام احسان گلد</span>
            </li>
            <li>
            <i className="bi bi-instagram emoji-footer"></i>
              <span>https://instagram.com/ehsangold96</span>
              </li>
            <li>
            <i className="bi bi-envelope emoji-footer"></i>
              <span>info@ehsangold.com</span>
              </li>
            </ul>
            </div>
            <div className='col-lg-6'>
            <img className='img-footer' src='img/sss.png'/>
            <img className='img-footer' src='img/ss.png'/>
            <img className='img-footer' src='img/ssss.svg'/>
            <img className='img-footer' src='img/sazman.jpeg'/>

            </div>
        </div>
        <ul className='d-flex  footer-list col-12'>
          <li className='footer-list-item'>قیمت طلا و سکه</li>
          <li className='footer-list-item'>درخواست</li>
          <li className='footer-list-item'>خریداقساطی</li>
          <li className='footer-list-item'>ثبت شکایت</li>
          <li className='footer-list-item'> درباره ی ما</li>
        </ul>
        <div className='copyRight'>
          <span>تمامی حقوق مربوط به فروشگاه یاس گلد میباشد <a href='#'>طراحی توسط اسپیید</a></span>
        </div>
       </div>

    </div>
  )
}
