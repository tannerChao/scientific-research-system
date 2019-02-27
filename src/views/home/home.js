import React, { Component } from 'react'
import { Layout, Breadcrumb, Icon, Menu, Row, Col, Input, Form } from 'antd'
import { RouteWithSubRoutes } from 'router'
import { Link } from 'react-router-dom'
import { findIndex, get, trim } from 'lodash'
import userImage from './../../assets/images/user-image.png'

import { menus } from './data'
import {
    SiderBar
} from 'comp'

const FormItem = Form.Item;
/**
 * 用户主页
 * @export
 * @class Home
 * @extends {Component}
 */
class Home extends Component {

    state = {
        collapsed: false,
        index: 0,
        itemIndex: 99
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    reduceVal = () => this.state.collapsed ? 96 : 216

    onRouteChange(r) {


        if (!isNaN(r.key)) {
            this.setState({
                index: r.key,
                itemIndex: 99
            })
        } else {
            this.setState({
                index: trim(r.keyPath[1], 's'),
                itemIndex: trim(r.keyPath[0], 'sub')
        })
    }
}

searchOrder = () => {
    this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('success', values);
            this.jump(values.orderCode)
        }
    })
}
jump(values) {
    if (values) {
        console.log(values)
        let order = values.split(',')
        console.log(order)
        if (order.length > 1) {
            this.props.history.push(`/home/waybill/list/tracks/${values}`)
        } else {
            this.props.history.push(`/home/waybill/list/track/${values}`)
        }

    }
}

sugguest = () => {
    this.props.history.push('/home/my/suggest')
    this.onRouteChange({ r: '6' })
}

render() {
    const { Header, Content } = Layout,
        { getFieldDecorator } = this.props.form,
        { match, routes, location, onRouteChange } = this.props
    let locations = location.pathname.substring(0, location.pathname.lastIndexOf('/'));
    // locationsId=findIndex(routes,o=>locations.indexOf(o.path));
    // console.log(routes,match,this.props,'--',locations);
    console.log(this.state.index);
    return (
        <Layout className='home' style={{ minHeight: '100vh' }}>

            <SiderBar
                {...this.props}
                menus={menus}
                collapsible={true}
                collapsed={this.state.collapsed}
                onCollapse={this.toggle}
                onRouteChange={e => this.onRouteChange(e)}>
                <div className="logo" />
            </SiderBar>
            <Layout className="main">
                <Header
                    className="header"
                    style={{ width: `${this.state.collapsed ? 'calc(100vw - 80px)' : 'calc(100vw - 200px)'}` }}
                >
                    <div className="trigger-wrap">
                        <Icon
                            className='trigger'
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <Row type='flex' gutter={36} style={{ marginRight: 14 }}>

                            <Col className="header-cursor" onClick={this.sugguest}>意见反馈</Col>
                            <Col>积分</Col>
                            <Col><img src={userImage} alt='头像' style={{ marginRight: 8 }} />用户名</Col>
                        </Row>
                    </div>
                </Header>
                <Content className='content'>
                    <Breadcrumb className="breadcrumb" style={{ padding: '0 24px' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>{get(menus[this.state.index], 'text')}</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.itemIndex===99?'':get(menus[this.state.index],'childs')[this.state.itemIndex].text}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="page-container">
                        <RouteWithSubRoutes routes={routes} redirect={`${match.path}/my-scientific`} />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
}
Home = Form.create()(Home);
export { Home }
