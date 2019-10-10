import React, { Component } from 'react'
import './index.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

/* 
    登录组件
*/
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src="" alt="logo"></img>
                    <h1>React后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                            </Form.Item>
                            <Form.Item>
                            <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}
