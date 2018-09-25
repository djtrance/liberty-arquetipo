import DefaultLayout from './containers/DefaultLayout';
import Mantenedor from './containers/Mantenedor/Mantenedor';
import RegistroCorredor     from './containers/corredor/registro/RegistroCorredor';
import HistoricoBusqueda from './views/ArchivoDigital/Historico';

const routes = [
  { path: '/', exact: true, name: 'prueba', component: DefaultLayout },
  { path: '/home', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/Mantenedor', exact: true, name: 'Mantenedor', component: Mantenedor},
  { path: '/corredor/registro', exact: true, name: 'Registro Corredor', component: RegistroCorredor },
  { path: '/ArchivoDigital', exact: true, name: 'Archivo Digital', component: HistoricoBusqueda }
];

export default routes;