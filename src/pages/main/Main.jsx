import { Order } from "../../components/orders/order";
import { Pizzas } from "../../components/pizzas/pizzas";
import MySlider from "../../components/slider/Slider";
import css from './Main.module.css'
import Slider from 'react-slick'
import { useEffect,useState } from "react";
import Api from '../../api/api'
import { useSelector } from "react-redux";



export default function Main (props){
    const [cards, setCards] = useState([]);
    const pizza = useSelector((state)=>state.pizza.data)
    useEffect(()=>{
        fetch("https://61da936a4593510017aff59d.mockapi.io/pizza/order")
        .then((res) => res.json())
        .then((data) => {
            setCards(data)
        })
    },[])
    
    
    
    const settings = {
        dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3.65,
      slidesToScroll: 1,
    }
    
   
       
        return (
            <div>
                <MySlider/>
                <div className={css.oftenOrder + ' container'}>Часто заказывают</div>
                <Slider {...settings} className={ ' container'}>
                     {cards.map((e) => <Order img={e.img} name={e.name} cost={e.cost} key={e.id}/> )}
                </Slider>
               
                <div className={css.meat}>
                
        
                <img alt="#" src='https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg'/>
                <div>
                    <div>Без свинины</div>
                <div className={css.without}>Мы готовим из цыпленка и говядины</div>
                </div>
                
            </div>
                <div id="pizza" className={css.pizzaTitle + ' container'}>Пицца</div>
                <div className={'container ' + css.wrapper}>
                {pizza.map((e) => <Pizzas id={e.id} setBasket={props.setBasket} img={e.img} name={e.name} des={e.des} cost={e.cost} key={e.id} /> )}
                </div>
                
            </div>
        )
    }

