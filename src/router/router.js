import React from 'react'
import { Route, HashRouter, Switch, Redirect } from "react-router-dom"
import routes from './routes'

/**
 * 路由+重定向
 */
export const RouteWithSubRoutes = ({routes, redirect}) => (
    <Switch>
        {routes.map((route, i) => (
            <Route 
                path={route.path} 
                exact={route.exact}
                key={i}
                render={props => <route.component {...props} routes={route.routes}/>}
            />
        ))}
        { redirect ? <Redirect to={redirect} />: '' }
    </Switch>
)

export const BrowserRouter = () => (
    <HashRouter>
        <RouteWithSubRoutes routes={routes} />
    </HashRouter>
)
