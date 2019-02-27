import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/**
 * 密码/验证码登录
 * @export
 * @class Login
 * @extends {Component}
 */
export class Login extends Component {
    render(){
        return (
            <div>
                <h1>登录界面</h1>
                <Link to='/home/waybill/list/list'>进入首页！</Link>

                
            </div>
        )
    }
}