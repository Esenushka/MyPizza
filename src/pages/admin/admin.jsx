import css from './admin.module.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

export const Admin = ()=>{
    const [error,setError] = useState('')
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    let history = useHistory();
    const submit =(e)=>{
        e.preventDefault()
        // if(user === 'Esenushka' && pass === 'esen2709'){
        //     history.push('/adminPanel')
        // }
        fetch('https://pizza-app-ulan.herokuapp.com/admin', {
            method: 'POST',
            body: JSON.stringify({
                login: user,
                password: pass
            })
        })
        .then((res) => res.json())
        .then((data) => {
            history.push('/adminPanel')
            if(data?.token){
                console.log('sucess');
            }else{
                setError(data.msg)
            }
            
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className={css.wrapper}>
            <form onSubmit={submit}>
            <div className={css.block}>
                <h2>Admin</h2>
               <input value={user} onChange={(e)=> setUser(e.target.value)} placeholder='Login' type="text" /> 
               <input value={pass} onChange={(e)=> setPass(e.target.value)} placeholder='Password' type='password'/>
               <button>LOGIN</button>
            </div>
            <h2>{error}</h2>
            </form>
        </div>
    )
}