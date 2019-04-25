import React, { Component } from 'react';
import Routes from '../routes';
import routesConfig from '../routes/config';
import { HeaderComponent } from './layouts';
class app extends Component {
    render() {
        return (
            <div className="b-wrapper">
                <HeaderComponent></HeaderComponent>
                <div>
                    {Routes(routesConfig)}
                </div>
            </div>
        );
    }
}

export default app;