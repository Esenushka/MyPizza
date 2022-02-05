import css from "./editPizza.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const EditPizza = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const edit = JSON.parse(localStorage.getItem("edit"));
  const submit = (e) => {
    e.preventDefault();
    // fetch('https://pizza-app-ulan.herokuapp.com/add/pizza', {
    //     method: 'POST',
    //     headers: {
    //         token: isAuth
    //     },
    //     body: JSON.stringify({
    //         image: img,
    //         name: name,
    //         info: des,
    //         price: price
    //     })
    // })
  };

  return (
    <div className={"container " + css.Wrapper}>
      <NavLink to="/adminPanel" className={css.closeBtn}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
            fill="#0000FF"
          ></path>
        </svg>
      </NavLink>
      <div className={css.imgWrapper}>
        <div className={css.underImgWrapper}>
          <TextField
            value={img}
            onChange={(e) => setImg(e.target.value)}
            helperText=" "
            id="demo-helper-text-aligned"
            label="Img url"
          />
        </div>

        <img className={css.img} src={img ? img : edit.img} />
      </div>
      <div className={css.underWrapper}>
        <div className={css.nameWrapper}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText=" "
            id="demo-helper-text-aligned"
            label="Name of Pizza"
          />
          <h2>{name ? name : edit.name}</h2>
        </div>
        <div className={css.desWrapper}>
          <TextField
            value={des}
            onChange={(e) => setDes(e.target.value)}
            helperText=" "
            id="demo-helper-text-aligned"
            label="Description"
          />
          <div>{des ? des : edit.des}</div>
        </div>
        <div className={css.priceWrapper}>
          <TextField
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            helperText=" "
            id="demo-helper-text-aligned"
            label="Price"
          />
          <h3>от {price ? price : edit.cost} сом</h3>
        </div>
      </div>
      <form onSubmit={submit} className={css.btnWrapper}>
        <Button type="submit" className={css.btn} variant="outlined">
          Enter
        </Button>
      </form>
    </div>
  );
};
