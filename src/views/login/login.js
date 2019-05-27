import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom'

/**
 * 密码/验证码登录
 * @export
 * @class Login
 * @extends {Component}
 */
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}


export class Login extends Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


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