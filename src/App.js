
import './App.css';
import Header from './Header/Header';
import LastProduct from './Last_Product/Last_Product';
import VideoShow from './videoShow/videoShow';
import Vitrin from './Vitrin/Vitrin';
import TextHead from './TextHead/TextHead';
import BlogItem from './BlogItem/BlogItem';
import About from './About/About';
import Footer from './Footer/Footer';


function App() {
  return(
  <div>
    <Header></Header>
    <div className='last_product '>
      <div className='container'>
      <TextHead title="آخرین محصولات" img="img/underline.png"></TextHead>
      <div className='row'>
      <LastProduct title="نیم ست طلا زنانه" price="21,700,000" img="img/1.jpg" col="col-lg-3"></LastProduct>
      <LastProduct title="دستبند طلا عیار 18  مدل sba59" price="40,200,000" img="img/2.jpg" col="col-lg-3"></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار زنانه کد N103" price="12,400,300" img="img/3.jpg" col="col-lg-3"></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار SR80-G" price="91,10,000" img="img/4.jpg" col="col-lg-3"></LastProduct>
      </div>
      </div>
      </div>
      <div className='videoShow'>
      <div className='container'>
      <VideoShow></VideoShow>
      <div className='row mt-3'>
      <Vitrin title="پیش حلقه" img="img/PishHalgeh.jpg"></Vitrin>
      <Vitrin title="سرویس طلای عروس" img="img/servisarus.jpg"></Vitrin>
      <Vitrin title="حلقه ازدواج عروس و داماد" img="img/HalgehSet.jpg"></Vitrin>
      </div>
      </div>
      </div>
      <div className='special'>
      <TextHead title="محصولات ویژه" img="img/underline.png"></TextHead>
      <div className='container'>
      <div className='row'>
      <LastProduct title="نیم ست طلا زنانه" price="6,559,000" img="img/14.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار مدل SET184" price="40,200,000" img="img/2.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار زنانه کد N103" price="12,400,300" img="img/3.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار کد SR72-G" price="24,817,000" img="img/13.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="انگشتر طلا 18 عیار جواهری مدل 10546" price="52,900,000" img="img/12.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="انگشتر طلا 18 عیار جواهری سُروری مدل 13887" price="55,500,000" img="img/11.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="گوشواره طلا 18 عیار زنانه مدل 11596" price="61,800,300" img="img/10.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6" col-sm-6 col-md-4></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار مدل تراش 8425" price="65,400,000" img="img/9.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار مدل dk149" price="72,016,000" img="img/8.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="نیم ست طلا 18 عیار زنانه مدل dks769" price="103,950,000" img="img/7.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="دستبند طلا 18عیار زنانه کد 2-B141" price="11,168,000" img="img/6.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      <LastProduct title="گوشواره طلا 18 عیار دوست خوب مدل dk458" price="1,050,000" img="img/5.jpg" col="col col-lg-3 col-sm-6 col-md-4 col-xs-6"></LastProduct>
      </div>
      </div>
      </div>
      <div className='blog'>
      <TextHead title="آخرین اخبار از وبلاگ" img="img/underline.png"></TextHead>
      <div className='container'>
      <div className='row'>
      <BlogItem img="img/blog1.jpg" title="تسهیلات اقساطی فروش طلا" text="  این روزها با در نظر گرفتن هزینه ها و خرج و مخارج سرسام آور روزانه به نظر دور از دسترس می رسد که بتوا..."></BlogItem>
      <BlogItem img="img/blog2.jpg" title="تنش های میان چین و تایوان چه تاثیراتی بر طلا خواهد داشت؟" text="سلام دوستان امروز می خوایم در مورد تنش های میان چین و تایوان و تاثیرات آن بر روی قیمت طلا صحبت کنیم. تنش ها..."></BlogItem>
      <BlogItem img="img/blog3.jpg" title="اجرت جیست؟ " text="امروز میخوایم در مورد اجرت کمی بحث کنیم , ببینیم چی هست اصلا , جیب کی میره , و مبلغش چقدره… پس با ما..."></BlogItem>
      </div>
      </div>
      <About></About>
      </div>
      <div className='footer-end'>
        <Footer></Footer>
      </div>
      </div>
  )
}

export default App;

