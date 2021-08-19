import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cadastro } from './Cadastro';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { Pagina404 } from './Pagina404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/cadastro/usuario' component={Cadastro} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='*' component={Pagina404}/>
      </Switch>
    </BrowserRouter>
  );
}