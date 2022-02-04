import { NavLink } from "react-router-dom";
import css from "./edit.module.css";

export const PizzasEdit = ({setEdit,...props}) => {
  const onSelect = () => {
    localStorage.setItem('edit',JSON.stringify(props))
    setEdit(props)
  };
  return (
    <div>
      <div className={css.pizza2}>
        <div className={css.imgWrapper}>
          <img alt="#" src={props.img} />
        </div>
        <div>
          <div className={css.pizzaName}>{props.name}</div> <br />
          <div className={css.description}>{props.des}</div>
        </div>

        <div className={css.footer}>
          <div>от {props.cost} сом</div>
          <NavLink to='/editPizza' onClick={onSelect} className={css.choose}>
            Изменить
          </NavLink>
        </div>
      </div>
    </div>
  );
};
