import css from './admin.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const Admin = ({ setIsAuth })=>{
    
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const [dis,setDis] = useState(false)
    const dispatch = useDispatch();
    const submit =(e)=>{
        e.preventDefault()
        setDis(true)

        
        
        axios.post('https://pizza-app-ulan.herokuapp.com/admin', {
                login: user,
                password: pass
            })
        
        .finally(()=>{
            setDis(true)
        })
        .then((res) => {
            if(res.data?.token){
                dispatch({
                    type: "success authorization",
                    playload: res.data
                })
              
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
               <button disabled={dis}>LOGIN</button>
            </div>
         
            </form>
        </div>
    )
}