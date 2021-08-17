import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cadastro } from './Cadastro';
import { Dashboard } from './dashboard';
import { Login } from './Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/cadastro/usuario' component={Cadastro} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}