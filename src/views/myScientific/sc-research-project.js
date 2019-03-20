import React, { Component } from 'react';
import { Table } from 'antd';

class ScResearchProject extends Component {
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
                title: '卡号',
                dataIndex: 'name',
                render: text => <a href="javascript:;">{text}</a>,
              }, {
                title: '姓名',
                className: 'column-money',
                dataIndex: 'money',
              }, {
                title: '项目类型',
                dataIndex: 'address',
              }, {
                title: '项目性质',
                dataIndex: 'address1',
              }, {
                title: '项目名称',
                dataIndex: 'address1',
              }, {
                title: '项目级别',
                dataIndex: 'address1',
              }, {
                title: '立项时间',
                dataIndex: 'address1',
              }, {
                title: '结题时间',
                dataIndex: 'address1',
              }, {
                title: '研究状态',
                dataIndex: 'address1',
              }, {
                title: '参与人数',
                dataIndex: 'address1',
              }, {
                title: '本人排名',
                dataIndex: 'address1',
              }, {
                title: '拨款金额',
                dataIndex: 'address1',
              }, {
                title: '到款金额',
                dataIndex: 'address1',
              }, {
                title: '验收结果',
                dataIndex: 'address1',
              }, {
                title: '立项来源',
                dataIndex: 'address1',
              }, {
                title: '立项类型',
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
export { ScResearchProject }