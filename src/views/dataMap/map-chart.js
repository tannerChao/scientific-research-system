import React, { Component } from 'react'
import { RouteWithSubRoutes } from '../../router'
/**
 * 我的科研
 */
export class MapChart extends Component {
    render() {
        let { match, routes } = this.props
        return (
            <RouteWithSubRoutes routes={routes} redirect={`${match.path}/result`} />
        )
    }
}