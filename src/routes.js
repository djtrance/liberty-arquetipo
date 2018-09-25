import React from 'react';

import DefaultLayout from './containers/DefaultLayout';
import Mantenedor from './containers/Mantenedor/Mantenedor';

function Loading() {
  return <div>Loading...</div>;
}

const routes = [
  { path: '/', exact: true, name: 'prueba', component: DefaultLayout },
  { path: '/home', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/Mantenedor', exact: true, name: 'Mantenedor', component: Mantenedor}
];

export default routes;