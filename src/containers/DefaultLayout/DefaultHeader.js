import React, { Component }       from 'react';
import { Nav, NavItem, NavLink }  from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Link 1</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Link 2</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">link 3</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;