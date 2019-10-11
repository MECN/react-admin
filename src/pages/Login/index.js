import React, { Component } from 'react'
import './index.less'
import { Form, Icon, Input, Button } from 'antd';

/* 
    登录组件
*/
class Login extends Component {
    // 密码验证
    validatepwd=(rule, value, callback)=>{
        if(!value){
            callback('密码必须输入')
        }else if(value.length<4){
            callback('密码需大于等于4位')
        }else if(value.length>12){
            callback('密码不能大于12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('用户名必须由英文、数字或下划线组成')
        }else{
            callback()//验证通过
        }
    }
    handleSubmit = e => {
        e.preventDefault();//阻止默认行为
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render() {
        const {getFieldDecorator}=this.props.form;
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
                                {
                                    getFieldDecorator('username',{
                                        // 声明式验证
                                        rules:[
                                            { required: true, message: '用户名必须输入' },
                                            { min: 4, message: '用户名必须输入' },
                                            { max: true, message: '用户名必须输入' },
                                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须由英文、数字或下划线组成' },
                                        ],
                                    })(
                                        <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />
                                    )
                                }
                                   
                            </Form.Item>
                            <Form.Item>
                                {
                                   getFieldDecorator('password',{
                                    rules:[{ 
                                        validator:this.validatepwd
                                    }],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                                )  
                                }
                            
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                              
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}
const WrappedLogin = Form.create()(Login);
export default WrappedLogin;
