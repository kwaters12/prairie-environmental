import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import WeedReportsList from './components/WeedReportsList';
import WeedReportCreate from './components/WeedReportCreate';

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
                        onRight={() => Actions.weedReportCreate()}
                        rightTitle="Add"
                        key="weedReportsList"
                        component={WeedReportsList}
                        title="Weed Reports"
                        initial
                    />
                    <Scene
                        onRight={null}
                        rightTitle=""
                        key="weedReportCreate"
                        component={WeedReportCreate}
                        title="New Weed Report"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
