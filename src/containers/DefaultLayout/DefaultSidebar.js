import React, { Component } from 'react';

class DefaultSidebar extends Component {
  render() {
    return (
        <div class="sidebar">
            <div class="sidebar-nav ps scrollbar-container ps--active-y">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#/home">
                            <i class="nav-icon icon-drop"></i>Archivos Digital
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/">
                            <i class="nav-icon icon-pencil"></i>Mantenedor
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default DefaultSidebar;