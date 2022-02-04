
import './App.css';
import {Header} from './components/header/header'
import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/navbar/navbar';
import Main from './pages/main/Main';
import {useState} from 'react'
import { BonusPage } from './pages/bonusPage/bonus';
import { Admin } from './pages/admin/admin';
import { AdminPanel } from './pages/adminPanel/panel';
import PublicRoute from './route/publicRoute';
import PrivateRoute from './route/privateRoute';
import { AddPizza } from './pages/addPizza/AddPizza';
import { EditPizza } from './pages/editPizza/editPizza';


function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])
  const [pizza, setPizza] = useState([]);
  const [login, setLogin] = useState(false)
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth')) || null)
  const [edit, setEdit] = useState([])

  useEffect(() => {
    localStorage.setItem('auth',JSON.stringify(isAuth))
  }, [isAuth])
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
       
         <PublicRoute path='/adminAuth' auth={isAuth} component={()=> <Admin setIsAuth={setIsAuth}/>}/>
        <PrivateRoute path='/adminPanel' auth={isAuth} component={()=> <AdminPanel setEdit={setEdit} pizza={pizza} setPizza={setPizza}  setIsAuth={setIsAuth}/>} />
        <PrivateRoute path='/addPizza' auth={isAuth} component={()=> <AddPizza isAuth={isAuth} />} /> 
        <PrivateRoute path='/editPizza' auth={isAuth} component={()=> <EditPizza edit={edit} pizza={pizza} />} />
      </Switch>

    </div>
  </Router>
);
}




export default App;
