import React, { Component } from 'react';

class DefaultSidebar extends Component {
  render() {
    return (
        <div className="sidebar">
            <div className="sidebar-nav ps scrollbar-container ps--active-y">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#/home">
                            <i className="nav-icon icon-drop"></i>Archivos Digital
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/Mantenedor">
                            <i className="nav-icon icon-pencil"></i>Mantenedor
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default DefaultSidebar;