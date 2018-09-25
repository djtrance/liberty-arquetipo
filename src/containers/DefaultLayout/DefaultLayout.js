import React, { Component }         from 'react';
import { Redirect, Route, Switch }  from 'react-router-dom';
import { Container } from 'reactstrap';

//hoja de estilo
import '../../styles/style1.css'

// routes config
import routes         from '../../routes';
import DefaultHeader  from './DefaultHeader';
import DefaultSidebar from './DefaultSidebar';
import DefaultFooter  from './DefaultFooter';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">

        <div className="app-header navbar">       
          <a className="navbar-brand">
            <img src="https://www.liberty.cl/imagenes/logo.png" width="150" height="54" alt="Liberty Seguros | Chile" className="navbar-brand-full"/>
          </a>
          <DefaultHeader />
        </div>

        <div className="app-body">

          <DefaultSidebar />

          <div className="main">
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/home" />
              </Switch>
            </Container>
          </div>
        </div>

        <div className="app-footer">
          <DefaultFooter />
        </div>
        
      </div>
    );
  }
}

export default DefaultLayout;
