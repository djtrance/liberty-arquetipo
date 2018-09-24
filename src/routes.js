import React from 'react';

import DefaultLayout        from './containers/DefaultLayout';
import ListadoCorredor      from './containers/corredor/listado/ListadoCorredor';
import RegistroCorredor     from './containers/corredor/registro/RegistroCorredor';

function Loading() {
  return <div>Loading...</div>;
}

const routes = [
  { path: '/',                  exact: true, name: 'prueba',            component: DefaultLayout },
  { path: '/home',              exact: true, name: 'Home',              component: DefaultLayout },
  { path: '/corredor',          exact: true, name: 'Consulta Corredor', component: ListadoCorredor },
  { path: '/corredor/registro', exact: true, name: 'Registro Corredor', component: RegistroCorredor },
];

export default routes;