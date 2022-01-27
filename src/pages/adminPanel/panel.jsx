import css from './panel.module.css'
import { Link, useHistory } from 'react-router-dom'
import { PizzasEdit } from '../../components/pizzasEdit/pizzasEdit'
import { useEffect } from 'react'


export const AdminPanel = ({setPizza, ...props})=>{
    const history = useHistory();
    const leave =()=>{
       history.push('/')
    }
    useEffect(()=>{
        fetch("https://61da936a4593510017aff59d.mockapi.io/pizza/pizzas")
        .then((res) => res.json())
        .then((data) => {
            setPizza(data)
            
        })
    },[])
    return(
        <div>
            <div className={css.navbar}>
                    <div className={'container ' + css.cont}>
             <div className={css.help}>
                 <Link className={css.navbars}>Пицца</Link>
                 <Link className={css.navbars}>Комбо</Link>
                 <Link className={css.navbars}>Закуски</Link>
                 <Link className={css.navbars}>Десерты</Link>
                 <Link className={css.navbars}>Напитки</Link>
                 <Link className={css.navbars}>Другие товары</Link>
             </div> 
             <div onClick={leave} className={css.bucket}>Выйти</div>
        </div>
        </div>
        <div className={css.pizzaWrapper + ' container'}>
            {props.pizza.map((e) => <PizzasEdit img={e.img} name={e.name} des={e.des} cost={e.cost} key={e.id}/>)}
        </div>

        </div>
        
    )
}