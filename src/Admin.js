import React,{Component} from 'react'
import {Row,Col,} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import './style/common.less'
import memory from './util/memory'
import {Redirect,Route,Switch} from 'react-router-dom'
import Category from './pages/Category'
import Product from './pages/Product'
import Role from './pages/Role'
import User from './pages/User'
import Bar from './pages/Charts/Bar'
import Line from './pages/Charts/Line'
import Pie from './pages/Charts/Pie'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const user=memory.user;
        if(!user||!user._id){
            // return <Redirect to="/login" />
        }
        return (  
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <Sidebar />
                    </Col>
                    <Col span={20}  className="main">
                        <Header></Header>
                        <Row className="content">
                            <Switch>
                                <Route path='/home' component={Home}></Route>
                                <Route path='/product/category' component={Category}></Route>
                                <Route path='/product/product' component={Product}></Route>
                                <Route path='/role' component={Role}></Route>
                                <Route path='/user' component={User}></Route>
                                <Route path='/charts/bar' component={Bar}></Route>
                                <Route path='/charts/line' component={Line}></Route>
                                <Route path='/charts/pie' component={Pie}></Route>
                                <Redirect to="/home"></Redirect>
                            </Switch>
                        </Row>
                        <Footer></Footer>
                    </Col>
                </Row>            
        );
    }
}
 
export default Index;