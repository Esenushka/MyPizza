
import './App.css';
import {Header} from './components/header/header'
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './components/navbar/navbar';
import Main from './pages/main/Main';
import {useState} from 'react'


function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])
  const [pizza, setPizza] = useState([]);
  const [login, setLogin] = useState(false)
  return (
    <Router>
    <div className='App'>
      <Header setLogin={setLogin} login={login}/>
      <Navbar  basket={basket}/>
      <Switch>
         <Route exact path='/'>
          <Main pizza={pizza} setPizza={setPizza} setBasket={setBasket}/>
         </Route>
         <Route exact path='/stocks'>
            <div>STocKs</div>
         </Route>
      </Switch>

    </div>
  </Router>
);
}




export default App;
