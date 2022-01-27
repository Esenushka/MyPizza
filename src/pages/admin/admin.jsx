import css from './admin.module.css'
import { useHistory } from 'react-router-dom'

export const Admin = ()=>{
    let history = useHistory();
    const submit =(e)=>{
        e.preventDefault()
        history.push('/adminPanel')
    }
    return(
        <div className={css.wrapper}>
            <form onSubmit={submit}>
            <div className={css.block}>
               <input placeholder='Login' type="text" /> 
               <input placeholder='Password' type='password'/>
               <button>LOGIN</button>
            </div>
            </form>
        </div>
    )
}