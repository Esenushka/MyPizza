import css from './bonus.module.css'
import { useEffect, useState } from 'react'
import { BonusCard } from '../../components/bonusCard/bonusCard'


export const BonusPage = ()=>{
    const [bonus,setBonus] = useState([])
    useEffect(()=>{
        fetch("https://61da936a4593510017aff59d.mockapi.io/pizza/bonus")
        .then((res) => res.json())
        .then((data) => {
            setBonus(data)
        })
    },[])
    return(
        <div className=' container'>
            <div className={css.title}>Акции</div>
            <div className={css.bonus}>
                {bonus.map((e)=> 
                    <BonusCard img={e.img} name={e.name} des={e.des}/>
                )}
            </div>
            
            
        </div>
    )
}