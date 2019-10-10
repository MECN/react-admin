import React,{Component} from 'react'
import {Row,Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import './style/common.less'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <Sidebar />
                    </Col>
                    <Col span={20}  className="main">
                        <Header></Header>
                        <Row className="content"><Home></Home></Row>
                        <Footer></Footer>
                    </Col>
                </Row>            
        );
    }
}
 
export default Index;