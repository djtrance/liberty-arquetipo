import React, { Component }         from 'react';
import { Redirect, Route, Switch }  from 'react-router-dom';
import { Container } from 'reactstrap';
import Aside from '../common/aside/Aside';
//hoja de estilo
import '../../styles/style1.css'

// routes config
import routes         from '../../routes';
import logo           from '../../styles/img/brand/logo.png'
import DefaultHeader  from './DefaultHeader';
import DefaultSidebar from './DefaultSidebar';
import DefaultFooter  from './DefaultFooter';

class DefaultLayout extends Component {

  constructor (props) {
    super(props)
    this.state = {
      asideOpen: false
    }
  }

  toggleMenu () {
    console.log('toggle...........');
    this.setState({asideOpen: !this.state.asideOpen})
  }

  handleStateChange (open) {
    this.setState({asideOpen: open})  
  }

  render() {
    return (
      <div className="app">

        <Aside open={this.state.asideOpen} handleStateChange={this.handleStateChange.bind(this)}/>

        <div className="app-header navbar">       
          <a className="navbar-brand">
            <img src={logo} width="80%" alt="Liberty Seguros | Chile" className="navbar-brand-full"/>
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
                        <route.component {...props} showAside={this.toggleMenu.bind(this)}/>
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
