import css from './panel.module.css'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PizzasEdit } from '../../components/pizzasEdit/pizzasEdit'
import Api from '../../api/api'



export const AdminPanel = ({setPizza , pizza, setIsAuth})=>{
    
   
    useEffect(()=>{
        Api.getAllPizza()
        .then((res) => {
            setPizza(res.data.data.data)
            
        })
    })
  
       
    const leave =()=>{
       setIsAuth(null)

    }
    return(
        <div>
            <div className={css.navbar}>
                    <div className={'container ' + css.cont}>
             <div className={css.help}>
                 <h1>ADMIN PANEL</h1>
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
            {pizza.map((e) => <PizzasEdit img={e.image} name={e.name} des={e.info} cost={e.price} key={e.id} id={e.id}/>)}
            <NavLink to='/addPizza' className={css.add}>+</NavLink>
        </div>

        </div>
        
    )
}