import React,{Component} from 'react'
import {Card,Table} from 'antd'
import './index.less'
class Category extends Component{

    render(){
        return (
            <Card title="Default size card" extra={<a href="#">More</a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
        );
    }
}
export default Category;