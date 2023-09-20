import React from 'react';
import {Switch,Route, BrowserRouter,Redirect} from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import MyErrorBoundary from './MyErrorBoundary';
import ProjectLayout from './ProjectLayout'; 
import { Suspense } from 'react';
import Loading from './Loading';
const Register = React.lazy(()=>import('./Register'));
const Login = React.lazy(()=>import('./Login'));
const ImageGallery = React.lazy(()=>import('./ImageGallery'));

const Logout = React.lazy(()=>import('./Logout'));
const Notfound = React.lazy(()=>import('./Notfound'));


const Layout = () => {
  return (
    <MyErrorBoundary>
      <Suspense fallback={<Loading/>}>
    <BrowserRouter>
        <Switch>
            <RouteWithLayout layout={ProjectLayout} component={ImageGallery} path="/" exact/>
            <Route component={Login} path="/login" exact/>
           
            
            <RouteWithLayout layout={ProjectLayout} component={Logout} path='/logout' exact/>
           
            
            <Route component={Notfound} path='/notfound' exact/>
            <Route component={Register} path="/register" exact/>
            <Redirect to='/notfound'/>

        </Switch>
    </BrowserRouter>
    </Suspense>
    </MyErrorBoundary>
  )
}

export default Layout