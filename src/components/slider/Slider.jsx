import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import css from './slider.module.css'



 export default function MySlider () {
    const slides = [
        'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1637144484_95593f16da7c42bd93c080ba657edb36.jpeg',
        'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1631191422_8085c7508813464fb209c66f95652654.jpeg',
      'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1601360618_47e471bb4370492ba90ac6abc6247878.jpeg',
      'https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1638520281_1ec578e4cfa24a18854d5ffcfcf2f3ca.jpeg'
    ]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
    return (
      <div className={css.wrapper + " container"}>
        <Slider {...settings}>

          {slides.map((item) => <img key={item} src={item} alt="#"/>)}

        </Slider>
      </div>
    );
  }
