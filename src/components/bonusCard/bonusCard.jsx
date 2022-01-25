import css from './bonusCard.module.css'

export const BonusCard = (props)=>{
    return(
            <div className={css.bonusWrapper}>
                <img className={css.img} src={props.img}/>
                <div className={css.name}>{props.name}</div>
                <div className={css.des}>{props.des}</div>
            </div>
    )
}