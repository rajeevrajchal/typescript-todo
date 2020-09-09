import React from 'react';
import {Switch, Route} from 'react-router-dom'
import routeList from "./routeList";

const Routes = () => {
    return (
        <Switch>
            {
                routeList.map((route, index) => (
                    <Route
                        path={route.path}
                        name={route.name}
                        component={route.component}
                        exact={route.exact}
                        key={index}
                    />
                ))
            }
        </Switch>
    );
};

export default Routes;
