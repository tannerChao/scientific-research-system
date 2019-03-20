import React, { Component } from 'react';
import { Table } from 'antd';


class FinancialAudit extends Component {
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
              }, {
                title: '',
                dataIndex: 'address1',
              }]
        }
    }
    render() {
        let { data, columns } = this.state;
        return (
            <div className='home'>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => 'Header'}
                    footer={() => 'Footer'}
                />
            </div>

        );
    }
}
export { FinancialAudit }