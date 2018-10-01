import DefaultLayout      from './containers/DefaultLayout';
import Mantenedor         from './containers/Mantenedor/Mantenedor';
import RegistroCorredor   from './containers/corredor/registro/RegistroCorredor';
import {LayoutHistorico}  from './views/ArchivoDigital';

const routes = [
  { path: '/',                      exact: true, name: 'prueba',                  component: DefaultLayout},
  { path: '/home',                  exact: true, name: 'Home',                    component: DefaultLayout},
  { path: '/Mantenedor',            exact: true, name: 'Mantenedor',              component: Mantenedor},
  { path: '/mantenedor/registro',   exact: true, name: 'Registro Corredor',       component: RegistroCorredor},
  { path: '/ArchivosHistoricos',    exact: true, name: 'Archivos Historicos',     component: LayoutHistorico }
];

export default routes;