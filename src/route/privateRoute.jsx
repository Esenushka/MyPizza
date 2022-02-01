import { Redirect, Route } from "react-router-dom";


export default function PrivateRoute({component: Component, path , auth}) {
  if(!auth){
      return <Redirect to='/adminAuth'/>
  }
  return <Route path={path}>
      <Component/>
  </Route>
}
