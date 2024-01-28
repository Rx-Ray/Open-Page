import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Login from '../views/Login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'
export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        {/*<Route path="/" component={NewsSandBox}/>*/}
        <Route path="/" render={()=>
        localStorage.getItem("token")?
        <NewsSandBox></NewsSandBox>:
        <Redirect to="/login"/>
        }/>
      </Switch>
    </HashRouter>
  )
}
