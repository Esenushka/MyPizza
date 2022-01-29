import css from './admin.module.css'
import { useHistory ,Redirect } from 'react-router-dom'
import { useState } from 'react';



export const Admin = ({ auth  , setIsAuth })=>{
    
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const [dis,setDis] = useState(false)
    const submit =(e)=>{
        e.preventDefault()
        setDis(true)
        // if(user === 'Esenushka' && pass === 'esen2709'){
        //     history.push('/adminPanel')
        // }
        fetch('https://pizza-app-ulan.herokuapp.com/admin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login: user,
                password: pass
            })
        })
        .finally(()=>{
            setDis(true)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data?.token){
                setIsAuth(data)
              
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