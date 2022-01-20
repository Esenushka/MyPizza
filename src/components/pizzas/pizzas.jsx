import { Link } from 'react-router-dom'
import css from './pizzas.module.css'

export const Pizzas = ({setBasket , ...props}) => {

  const onSelect = () => {
    const basket = JSON.parse(localStorage.getItem("basket")) || []
    basket.forEach((item, index) => {
        if (item.id === props.id) {
            return null
        }else if (index === basket.length - 1)  {
            basket.push(props)
            localStorage.setItem("basket", JSON.stringify(basket))
            setBasket(basket)
        }
    })
    if (basket.length === 0) {
        basket.push(props)
        localStorage.setItem("basket", JSON.stringify(basket))
        setBasket(basket)
    }
}
    return(
        <div>

            
                <Link to='/' className={css.pizza2}>
                    
                        <div className={css.imgWrapper}>
                           <img src={props.img}/>
                        </div>
                        <div>
                              <div className={css.pizzaName}>{props.name}</div> <br />
                      
                       <div className={css.description}>{props.des}</div> 
                        </div>
                    
                    <div className={css.footer}>
                      <div>от {props.cost} сом</div>
                      <div onClick={onSelect} className={css.choose}>Выбрать</div>
                    </div>
                </Link>
            </div>
    )
}