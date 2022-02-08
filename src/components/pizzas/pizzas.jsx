import { Link } from 'react-router-dom'
import css from './pizzas.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
export const Pizzas = ({setBasket , ...props}) => {
    const basket = useSelector((state) => state.basket.data)

    const dispatch = useDispatch()
  const onSelect = () => {
      let count = 0;
    
    basket.forEach((item) => {
        if (item.id === props.id) {
            count++
        }
    })
    if (count === 0) { 
        dispatch({
            type: 'basket/GET_PIZZAS',
            playload: [...basket,props]
        })


        
    }
}
    return(
        <div>

            
                <Link to='/' className={css.pizza2}>
                    
                        <div className={css.imgWrapper}>
                           <img src={props.img} alt='#'/>
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