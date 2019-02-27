import React, { Component } from 'react'
import { Layout, Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { forEach } from 'lodash'
/**
 * 侧边栏组件
 * menus         @菜单数据
 * collapsed     @当前收起状态  antd属性
 * collapsible   @是否可收起    antd属性
 * onCollapse    @展开/收起回调 antd方法
 * onRouteChange @点击每项回调  
 * @export
 * @class SiderBar
 * @extends {Component}
 */
export class SiderBar extends Component {

    state = {
        activeMenusIndex: 1,
        openKeys:['s0'],
        rootSubmenuKeys:[]
    }

    componentWillMount() {
        const { menus, history } = this.props
        console.log(this.props)
        const activeIndex = this.getDefulatActiveMenusIndex(menus, history.location.pathname);
        let rootSubmenuKeys=[]
        forEach(menus,(o,index)=>{
            if(o.childs){
                rootSubmenuKeys.push(`s${index}`)
            }
        })
        this.setState({
            activeMenusIndex: activeIndex,
            rootSubmenuKeys
        })
    }

    getDefulatActiveMenusIndex(menus, curPath) {
        let activeIndex = null
        const findIndex = (menusItem, preName = '') => {
            menusItem.forEach((i, index) => {
                if (curPath.indexOf(i.route) > -1 && !i.childs) {
                    activeIndex = `${preName}${index}`
                } else {
                    if (i.childs) {
                        findIndex(i.childs, 'sub')
                    }
                }
            })
        }
        findIndex(menus)
        return activeIndex
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
    }

    render() {
        const { Sider } = Layout
            , { SubMenu } = Menu
            , { menus,
                onCollapse,
                collapsed,
                collapsible,
                onRouteChange } = this.props
        return (
            <Sider
                collapsible={collapsible}
                collapsed={collapsed}
                onCollapse={onCollapse}
                theme="dark"
            >

                {/* Logo插槽 */}
                {this.props.children}
                <Menu
                    theme="dark"
                    mode="inline"
                    inlineCollapsed={false}
                    onClick={onRouteChange}
                    defaultSelectedKeys={[this.state.activeMenusIndex]}
                    defaultOpenKeys={['s0']}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    {
                        menus.map((m, i) => (
                            !m.childs ?
                                <Menu.Item key={i} >
                                    <Link to={m.route}>
                                        <Icon type={m.icon} />
                                        <span>{m.text}</span>
                                    </Link>
                                </Menu.Item> :
                                <SubMenu
                                    key={`s${i}`}
                                    title={
                                        <Link to={m.route}>
                                            <Icon type={m.icon} />
                                            <span>{m.text}</span>
                                        </Link>}
                                >
                                    {
                                        m.childs.map((s, i) =>
                                            <Menu.Item key={`sub${i}`}>
                                                <Link to={s.route}>{s.text}</Link>
                                            </Menu.Item>
                                        )
                                    }
                                </SubMenu>
                        ))
                    }
                </Menu>
            </Sider>
        )
    }
}