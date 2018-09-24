import React from 'react';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const routes = [
  { path: '/', exact: true, name: 'prueba', component: DefaultLayout },
  { path: '/home', exact: true, name: 'Home', component: DefaultLayout },
];

export default routes;