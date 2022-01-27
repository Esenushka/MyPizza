
import css from "./edit.module.css";

export const PizzasEdit = (props) => {
  const onSelect = () => {};
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
          <div onClick={onSelect} className={css.choose}>
            Изменить
          </div>
        </div>
      </div>
    </div>
  );
};
