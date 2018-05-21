import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AuthChecker from './components/AuthChecker';
import LoginForm from './components/LoginForm';
import WeedReportsList from './components/WeedReportsList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        onRight={() => Actions.employeeCreate()}
                        rightTitle="Add"
                        key="weedReportsList"
                        component={WeedReportsList}
                        title="Weed Reports"
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
