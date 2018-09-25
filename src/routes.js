import React from 'react';

import DefaultLayout from './containers/DefaultLayout';
import Mantenedor from './containers/Mantenedor/Mantenedor';
import RegistroCorredor     from './containers/corredor/registro/RegistroCorredor';

function Loading() {
  return <div>Loading...</div>;
}

const routes = [
  { path: '/', exact: true, name: 'prueba', component: DefaultLayout },
  { path: '/home', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/Mantenedor', exact: true, name: 'Mantenedor', component: Mantenedor},
  { path: '/corredor/registro', exact: true, name: 'Registro Corredor', component: RegistroCorredor }
];

export default routes;