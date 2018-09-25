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
                    <li class="nav-item">
                        <a class="nav-link" href="#/Mantenedor">
                            <i class="nav-icon icon-pencil"></i>Mantenedor
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/corredor">
                            <i className="nav-icon icon-pencil"></i>Corredor
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default DefaultSidebar;