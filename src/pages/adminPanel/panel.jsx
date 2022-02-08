import css from "./panel.module.css";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { PizzasEdit } from "../../components/pizzasEdit/pizzasEdit";
import Api from "../../api/api";
import { useDispatch } from "react-redux";
import { logoutAuth, successAuth } from "../../redux/actions/authActions";

export const AdminPanel = ({ setPizza, setEdit, pizza, setIsAuth }) => {
  useEffect(() => {
    fetch("https://61da936a4593510017aff59d.mockapi.io/pizza/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
      });
  });
  const dispatch = useDispatch()
  const leave = () => {
    dispatch( logoutAuth ())
  };
  return (
    <div>
      <div className={css.navbar}>
        <div className={"container " + css.cont}>
          <div className={css.help}>
            <h1>ADMIN PANEL</h1>
            <a className={css.navbars}>Пицца</a>
            <a className={css.navbars}>Комбо</a>
            <a className={css.navbars}>Закуски</a>
            <a className={css.navbars}>Десерты</a>
            <a className={css.navbars}>Напитки</a>
            <a className={css.navbars}>Другие товары</a>
          </div>
          <div onClick={leave} className={css.bucket}>
            Выйти
          </div>
        </div>
      </div>
      <div className={css.pizzaWrapper + " container"}>
        {pizza.map((e) => (
          <PizzasEdit
            setEdit={setEdit}
            img={e.img}
            name={e.name}
            des={e.des}
            cost={e.cost}
            key={e.id}
            id={e.id}
          />
        ))}
        <NavLink to="/addPizza" className={css.add}>
          +
        </NavLink>
      </div>
    </div>
  );
};
