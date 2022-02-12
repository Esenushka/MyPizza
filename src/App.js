import "./App.css";
import { Header } from "./components/header/header";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import Main from "./pages/main/Main";
import { useState } from "react";
import { BonusPage } from "./pages/bonusPage/bonus";
import { Admin } from "./pages/admin/admin";
import { AdminPanel } from "./pages/adminPanel/panel";
import PublicRoute from "./route/publicRoute";
import PrivateRoute from "./route/privateRoute";
import { AddPizza } from "./pages/addPizza/AddPizza";
import { EditPizza } from "./pages/editPizza/editPizza";
import { useDispatch, useSelector } from "react-redux";
import Api from "./api/api";
import { getPizzaAC, getPizzaAsync } from "./redux/actions/pizzaActions";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [login, setLogin] = useState(false);
  const [edit, setEdit] = useState([]);
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.data);
  const basket = useSelector((state) => state.basket.data);
  const { isLoading, data } = (state) => state.pizza;
  Api.getAllPizza().then((res) => {
    dispatch(getPizzaAC(res.data));
  }, []);
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authData));
  }, [authData]);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  useEffect(() => {
    dispatch(getPizzaAsync())
  }, [])
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Navbar setLogin={setLogin} login={login} />
            <Main />
          </Route>
          <Route path="/bonus">
            <Header />
            <Navbar setLogin={setLogin} login={login} basket={basket} />
            <BonusPage />
          </Route>

          <PublicRoute path="/adminAuth" component={Admin} />
          <PrivateRoute
            path="/adminPanel"
            component={() => <AdminPanel setEdit={setEdit} />}
          />
          <PrivateRoute path="/addPizza" component={() => <AddPizza />} />
          <PrivateRoute
            path="/editPizza"
            component={() => <EditPizza edit={edit} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
