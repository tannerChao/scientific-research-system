import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Loading } from '../../components'

@inject(store=>({
    login:store.user.getLogin,
    setUserinfo: store.user.setUserinfo,
}))
@observer
class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            spining: false
        }
    }

    setLoading = () =>{
        this.setState({
            spining: !this.state.spining
        }) 
    }

    handleSubmit = e => {
    
        const { login, setUserinfo } = this.props;

        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            const { username, password } = values;
            if (!err) {
                this.setLoading()
                let res = await login({
                    username, password
                })
                if( res.code === 0 && res.success){
                    setUserinfo({
                        ...res.data
                    })
                    this.props.history.push('/home')
                }else{
                    notification['error']({
                        message: res.message
                    })
                }
                this.setLoading()
            }
        });
    };

  render() {
    const { spining } = this.state
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="login">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户账号!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入用户账号"
                    />,
                )}
                </Form.Item>
                <Form.Item style={{ marginBottom: '0px' }}>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入用户密码!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入用户密码"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>记住密码</Checkbox>)}
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登 录
                </Button>
                </Form.Item>
            </Form>
            <Loading spinning={spining} size="large" /> 
        </div> 
    );
  }
}

Login = Form.create({ name: 'login' })(Login);
export { Login }

// export class Login extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>登录界面</h1>
//                 <Link to='/home/waybill/list/list'>进入首页！</Link>

                
//             </div>
//         )
//     }
// }