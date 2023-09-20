import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Parse from 'parse'

const RouteWithLayout = (props) => {
    const {layout:Layout, component:Component,...rest} = props;
    const user = Parse.User.current()
  return (
   <Route
   {...rest}
   render = {(matchProps)=>{
if(user){
return (<Layout>
    <Component {...matchProps} user={user}/>
</Layout>)
}else{
    return(<Redirect to='/login'/>)
}
   }}

   />
  )
}

export default RouteWithLayout