import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cadastro } from './Cadastro';
import { Dashboard } from './Dashboard';
import { FormularioEdicaoPerfil } from "./Perfil/FormularioEdicaoPerfil";
import { FormularioDadosPerfil } from "./Perfil/FormularioDadosPerfil";
import { Login } from './Login';
import { Pagina404 } from './Pagina404';
import { TodasAsCategorias } from './Categoria/TodasAsCategorias';
import { FormularioCategorias } from './Categoria/FormularioCategorias';
import { GamePage } from './GamePage';
// import { Perfil } from './Perfil';
// import { TesteCampoData } from '../teste_components/TesteCampoData';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/cadastro/usuario' component={Cadastro} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/cadastro/categorias' component={FormularioCategorias} />
        <Route exact path='/categorias' component={TodasAsCategorias} />
        <Route exact path='/perfil/:id' component={FormularioDadosPerfil} />
        <Route exact path='/perfil/edicao/:id' component={FormularioEdicaoPerfil} />
        <Route exact path='/game/:id' component={GamePage} />
        {/* <Route exact path='/perfil/:id' component={Perfil} /> */}
        {/* <Route exact path='/teste_campo_data' component={TesteCampoData} /> */}
        <Route path='*' component={Pagina404}/>
      </Switch>
    </BrowserRouter>
  );
}