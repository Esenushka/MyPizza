
import './App.css';
import {Header} from './components/header/header'
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { Navbar } from './components/navbar/navbar';
import Main from './pages/main/Main';
import {useState} from 'react'
import { BonusPage } from './pages/bonusPage/bonus';
import { Admin } from './pages/admin/admin';
import { AdminPanel } from './pages/adminPanel/panel';
import { PizzasEdit } from './components/pizzasEdit/pizzasEdit'


function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])
  const [pizza, setPizza] = useState([]);
  const [login, setLogin] = useState(false)
  return (
    <Router>
    <div className='App'>
      <Switch>
         <Route exact path='/'>
         <Header />
      <Navbar setLogin={setLogin} login={login} basket={basket}/>
          <Main pizza={pizza} setPizza={setPizza} setBasket={setBasket}/>
         </Route>
         <Route path='/bonus'>
         <Header />
      <Navbar setLogin={setLogin} login={login} basket={basket}/>
            <BonusPage/>
         </Route>
         <Route path='/adminAuth'>
           <Admin/>
         </Route>
        <Route path='/adminPanel'>
          <AdminPanel pizza={pizza} setPizza={setPizza}/>
         
        </Route>
      </Switch>

    </div>
  </Router>
);
}




export default App;
