import { Redirect, Route } from "react-router-dom";


export default function PublicRoute( {component: Component, path , auth} ) {
  if(auth){
      return <Redirect to='/adminPanel'/>
  }

  return <Route path={path}>
     <Component/>
  </Route>
}
