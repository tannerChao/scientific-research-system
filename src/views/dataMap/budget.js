import React, { Component } from 'react';
import { Table,Input, Row, Col,Button } from 'antd';

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                key: '1',
                name: 'John Brown',
                money: '￥300,000.00',
                address: 'New York No. 1 Lake Park',
                address1: 'New York No. 1 Lake Park',
              }, {
                key: '2',
                name: 'Jim Green',
                money: '￥1,256,000.00',
                address: 'London No. 1 Lake Park',
                address1: 'New York No. 1 Lake Park',
              }, {
                key: '3',
                name: 'Joe Black',
                money: '￥120,000.00',
                address: 'Sidney No. 1 Lake Park',
                address1: 'New York No. 1 Lake Park',
              },
              {
                key: '4',
                name: 'Joe Black4',
                money: '￥120,000.004',
                address: 'Sidney No. 1 Lake Park4',
                address1: 'New York No. 1 Lake Park',
              }],
              columns : [{
                title: '经费名称',
                dataIndex: 'name',
                render: text => <a href="javascript:;">{text}</a>,
              }, {
                title: '经费预算',
                className: 'column-money',
                dataIndex: 'money',
              }, {
                title: '录入人',
                dataIndex: 'address',
              }, {
                title: '',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">查看经费使用情况</a>,
              }, {
                title: '',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">删除</a>,
              }]
        }
    }
    render() {
        let { data, columns } = this.state;

        return (
            <div className='budget budget-home'>
                <div className='content' style={{padding: ' 20px'}}>
                    <Row gutter={16} justify='space-between' style={{padding: '10px 0'}}>
                      <Col span={4}><Input placeholder="经费名称" />,</Col>
                      <Col span={4}><Input placeholder="经费预算" />,</Col>
                      <Col span={4}><Button type="primary" >添加</Button></Col>
                    </Row>    
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                    />
                </div>          
            </div>

        );
    }
}
export { Budget }