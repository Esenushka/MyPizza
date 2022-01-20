import { Link } from 'react-router-dom'
import css from './header.module.css'
export const Header = ({setLogin , ...props}) => {
    const openLogin = ()=>{
        setLogin(!props.login)
    }
    return(
        <div className={css.wrapper + ' container'}>
            <div className={css.left}>
                <Link className={css.logo} to='/'>
                                <img className={css.logos}  src='https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/640px-Dodo_Logo.svg.png'/>
                </Link>

            <div className={css.leftCenter}>
                <div className={css.order}>Доставка пиццы Бишкек</div>
                <div className={css.min}>39 мин 4.75
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={css.rating}><defs><linearGradient id="star_16_svg__a"><stop offset="50%"></stop><stop offset="50%" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_16_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                </div>
            </div>
            
            <div> 
                <a className={css.tel} href='tel:+996700231661'>0(700)231-661</a>
                <div className={css.call}>Звонок по телефону</div>
            </div>
            </div>
            
            <div className={css.right}>
                <Link to='/' className={css.coins}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z" fill="#000"></path></svg>
                <span className={css.label}>Додокоины</span>
                </Link>
                <div onClick={openLogin} className={css.login}>
                    Войти
                </div>
            </div>
               

               <div className={css.all + ' ' + (props.login ? css.active4 : '')}>
              
            <div onClick={openLogin} className={css.loginBack + ' ' + (props.login ? css.active1 : '')}>
           </div>
            <div className={css.loginBlock + ' ' + (props.login ? css.active2 : '')}>
               <div className={css.block + ' ' + (props.login ? css.active3 : '')}>
                <div onClick={openLogin} className={css.blockImg}>         
                   <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
                </div>
                  <div className={css.blockTitle}>
                    Вход на сайт
                  </div>
                  <div className={css.blockInfo}>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</div>
                  <div className={css.telInput}>Номер телефона</div>
                  <input className={css.input} type="tel" placeholder='+996 999-000005' value='+996' />
               </div>
               
            </div>
           </div>

        </div>
    )
}