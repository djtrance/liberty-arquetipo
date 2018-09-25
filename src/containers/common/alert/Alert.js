import React, { Component } from 'react';
import MESSAGES from '../../../constants/message';

class RegistroCorredor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    getClassName(){
        var className = '';
        switch (this.props.alert.tipo) {
            case (MESSAGES.TIPO.INFO):      className = 'alert-info';
                                            break;
            case (MESSAGES.TIPO.SUCCESS):   className = 'alert-success';
                                            break;
            case (MESSAGES.TIPO.WARNING):   className = 'alert-warning';
                                            break;
            case (MESSAGES.TIPO.ERROR):     className = 'alert-danger';
                                            break;
            default:                        className = '';
                                            break;
        }

        return 'alert ' + className;
    }

    render() {
        return (
            <div className={this.getClassName()} role="alert">
                { this.props.alert.mensaje }
            </div>
        );
    }
}
export default RegistroCorredor;