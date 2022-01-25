import css from './admin.module.css'

export const Admin = ()=>{
    const submit =(e)=>{
        e.preventDefault()
    }
    return(
        <div className={css.wrapper + ' container'}>
            <form onSubmit={submit}>
            <div>
               <input placeholder='Login' type="text" /> 
               <input placeholder='Password' type='password'/>
               <button>LOGIN</button>
            </div>
            </form>
        </div>
    )
}