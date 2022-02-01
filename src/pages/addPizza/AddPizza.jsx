import css from './add.module.css'
import { TextField,Button } from '@mui/material'
import { useState } from 'react'
export const AddPizza = ({isAuth})=>{
    const [img,setImg] = useState('')
    const [name,setName] = useState('')
    const [des,setDes] = useState('')
    const [price,setPrice] = useState('')
    const submit = (e)=>{
        e.preventDefault();
        fetch('https://pizza-app-ulan.herokuapp.com/add/pizza', {
            method: 'POST',
            headers: {
                token: isAuth
            },
            body: JSON.stringify({
                image: img,
                name: 'sadha',
                info: 'djad',
                price: 'hadj'
            })
        })
    }
    return(
        <div className={'container ' + css.Wrapper}>
            <div className={css.imgWrapper}>
            <TextField
            value={img} 
            onChange={(e)=> setImg(e.target.value)}
              helperText=" "
                id="demo-helper-text-aligned"
              label="Img url"
             />
         
                         <img src={img ? img : "https://dodopizza-a.akamaihd.net/static/Img/Products/1ee83fd7a0444e7c90bf593fdea61801_366x366.jpeg"}/>
            </div>
            <div className={css.underWrapper}>

            
            <div className={css.nameWrapper}>
            <TextField
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}
              helperText=" "
              id="demo-helper-text-aligned"
              label="Name of Pizza"
            />
            <h2>{name ? name : 'Азитская'}</h2>
            </div>
            <div className={css.desWrapper}>
            <TextField
                        value={des} 
                        onChange={(e)=> setDes(e.target.value)}
              helperText=" "
              id="demo-helper-text-aligned"
              label="Description"
            />
             <div>{des ? des : 'Моцарелла, сладкий перец, томаты, красный лук, фарш из говядины, сушеный перец чили, томатный соус'}</div>
            </div>
            <div className={css.priceWrapper}>
            <TextField
            type='number'
                        value={price} 
                        onChange={(e)=> setPrice(e.target.value)}
               helperText=" "
               id="demo-helper-text-aligned"
               label="Price"
             />
             <h3>от {price ? price : '520'} сом</h3>
            </div>
            </div>
            <form onSubmit={submit} className={css.btnWrapper}><Button type='submit'  className={css.btn} variant="outlined">Enter</Button></form>
            
        </div>
    )
}