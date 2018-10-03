import DefaultLayout      from './containers/DefaultLayout';
import Mantenedor         from './containers/Mantenedor/Mantenedor';
import RegistroCorredor   from './containers/corredor/registro/RegistroCorredor';
import {
  LayoutHistorico,
  LayoutDisponible}       from './views/ArchivoDigital';

const routes = [
  { path: '/',                          exact: true, name: 'prueba',              component: DefaultLayout},
  { path: '/home',                      exact: true, name: 'Home',                component: DefaultLayout},
  { path: '/Mantenedor',                exact: true, name: 'Mantenedor',          component: Mantenedor},
  { path: '/mantenedor/registro',       exact: true, name: 'Registro Corredor',   component: RegistroCorredor},
  { path: '/ArchivoDigital/Historicos', exact: true, name: 'Historicos',          component: LayoutHistorico },
  { path: '/ArchivoDigital/Nuevos',     exact: true, name: 'Nuevos',              component: LayoutDisponible }
];

export default routes;