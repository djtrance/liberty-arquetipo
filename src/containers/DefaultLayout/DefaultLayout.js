import React, { Component }         from 'react';
import { Redirect, Route, Switch }  from 'react-router-dom';
import { Container, Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Media } from 'reactstrap';

//hoja de estilo
import '../../styles/style1.css'

// routes config
import routes         from '../../routes';
import logo           from '../../styles/img/brand/logo.png'
import DefaultHeader  from './DefaultHeader';
import DefaultSidebar from './DefaultSidebar';
import DefaultFooter  from './DefaultFooter';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">

        <div class="app-header navbar">       
          <a class="navbar-brand">
            <img src={{logo}} width="89" height="25" alt="Liberty Seguros | Chile" class="navbar-brand-full"/>
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
