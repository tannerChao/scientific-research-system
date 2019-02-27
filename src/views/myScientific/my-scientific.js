import React, { Component } from 'react'
import { RouteWithSubRoutes } from '../../router'
/**
 * 我的科研
 */
export class Myscientific extends Component {
    render() {
        let { match, routes } = this.props;
        console.log(`${match.path}/add`)
        return (
            <RouteWithSubRoutes routes={routes} redirect={`${match.path}/add`} />
        )
    }
}