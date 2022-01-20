import { Link } from 'react-router-dom'
import css from './navbar.module.css'
import { useState } from 'react';
export const Navbar = ({basket}) =>{
    const [cart, setCart] = useState(false);
    const BasketWindow = ()=>{
        setCart(!cart)
    }
    return(
        <nav className={css.navbar}>
        <div className={'container ' + css.cont}>
             <div className={css.help}>
                 <a className={css.navbars}>Пицца</a>
                 <a className={css.navbars}>Комбо</a>
                 <a className={css.navbars}>Закуски</a>
                 <a className={css.navbars}>Десерты</a>
                 <a className={css.navbars}>Напитки</a>
                 <a className={css.navbars}>Другие товары</a>
                 <a className={css.navbars}>Акции</a>
                 <a className={css.navbars}>Контакты</a>
                 <a className={css.navbars}>О нас</a>
                 <a className={css.navbars}>Прямой эфир</a>

             </div> 
             <div onClick={BasketWindow} className={css.bucket}>Корзина<div className={css.many}>{basket.length}</div></div>
        </div>
        <div className={css.windowCarts + ' ' + (cart ?  css.active1 : '')}>
            <div onClick={BasketWindow} className={css.closeWindow + ' ' + (cart ?  css.active4 : '')}></div>
            <div className={css.closeBtn + ' ' + (cart ?  css.active2 : '')} onClick={BasketWindow}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
            </div>
            <div className={css.basketWindow + ' ' + (cart ?  css.active3 : '')}>
                
                   
            <div>
                <div className={css.price}>
                    {basket.length} товаров на {
                      basket.reduce((akk,el)=>{
                        return akk + el.cost
                      }, 0)
                    } сом
                </div>
                {basket.map((e) => <BasketPizzas key={e.id} img={e.img} name={e.name} cost={e.cost}/>)}
            </div>

            <div className={css.footer}>
                <div className={css.price2}> 
                    <div>{basket.length} товаров</div>
                    <div>{basket.reduce((akk,el)=>{
                        return akk + el.cost
                      }, 0)
                    } сом</div>
                </div>
                <hr />
                <div className={css.price3}> 
                    <div>Сумма заказа</div>
                    <div>{basket.reduce((akk,el)=>{
                        return akk + el.cost
                      }, 0)
                    } сом</div>
                </div>

                <div className={css.btn}>
                   К оформлению заказа
                </div>
            </div>
            </div>
        </div>

        

        </nav>
    )
}


export default function BasketPizzas (props){
    return(
        <div className={css.block}>
            <img className={css.img} src={props.img}/>
            <div className={css.nameDes} >
                <div className={css.name}>{props.name}</div>
            <div className={css.des}>Средняя , традиционая тесто</div>
            </div>
            
            <div className={css.cost}>{props.cost} сом</div>
        </div>
    )
}

