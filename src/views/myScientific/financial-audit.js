import React, { Component } from 'react';
import { Table } from 'antd';


class FinancialAudit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                key: '1',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '已提交',
              }, {
                key: '2',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '已提交',
              }, {
                key: '3',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '已提交',
              },
              {
                key: '4',
                name: 'KYXM20180615154541',
                money: '123',
                address: '院领导室',
                address1: '已提交',
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
              }, {
                title: '',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">审核</a>
              }]
        }
    }
    render() {
        let { data, columns } = this.state;
        return (
            <div className='home'>
                <Table
                    style={{width:1300}}
                    columns={columns}
                    dataSource={data}
                    bordered
                    
                />
            </div>

        );
    }
}
export { FinancialAudit }