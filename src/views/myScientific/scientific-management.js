import React, { Component } from 'react';
import { Table } from 'antd';

class ScientificManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                key: '1',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '计财处已审核',
              }, {
                key: '2',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '专家组审核中',
              }, {
                key: '3',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '已结题',
              },
              {
                key: '4',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '专家组已审核',
              }],
              columns : [{
                title: '项目编号',
                dataIndex: 'name',
                render: text => <a href="javascript:;">{text}</a>,
              }, {
                title: '项目名称',
                className: 'column-money',
                dataIndex: 'money',
              }, {
                title: '申报部门',
                dataIndex: 'address',
              }, {
                title: '状态',
                dataIndex: 'address1',
              }, {
                title: '',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">详情</a>
              }]
        }
    }
    render() {
        let { data, columns } = this.state;
        
        return (
            <div className='scientific-management'>
              <div className='content'>
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
export { ScientificManagement }