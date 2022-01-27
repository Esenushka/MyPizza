import css from './admin.module.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

export const Admin = ()=>{
    let history = useHistory();
    const submit =(e)=>{
        e.preventDefault()
        if(e.target[0].value === 'Esenushka' && e.target[1].value === 'esen2709'){
            history.push('/adminPanel')
        }
    }
    return(
        <div className={css.wrapper}>
            <form onSubmit={submit}>
            <div className={css.block}>
                <h2>Admin</h2>
               <input placeholder='Login' type="text" /> 
               <input placeholder='Password' type='password'/>
               <button>LOGIN</button>
            </div>
            </form>
        </div>
    )
}