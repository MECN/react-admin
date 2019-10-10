import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import menuList from '../../config/menuConfig'
import { Menu} from 'antd';
import './index.less'
const { SubMenu } = Menu;

console.log(menuList)
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey:'',
        }
    };
    // 组件将挂载
    UNSAFE_componentWillMount(){
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单点击
    handleClick = ({ item, key }) => {
        if (key === this.state.currentKey) {
            return false;
        }
        // // 事件派发，自动调用reducer，通过reducer保存到store对象中
        // const { dispatch } = this.props;
        // dispatch(switchMenu(item.props.title));

        // this.setState({
        //     currentKey: key
        // });
    };
     // 菜单渲染
     renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item title={item.title} key={item.key}>
                <Link to={item.key}>{item.title}</Link>
            </Menu.Item>)
        })
    }
render() {
    return (
        <div>
            <Link to="/home" onClick={this.han}>
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Imooc MS</h1>
            </div>
            </Link>
            <Menu
                    onClick={this.handleClick}
                    theme="dark"
                >
                    { this.state.menuTreeNode }
                </Menu>
        </div>
    );
}
}

export default Index;