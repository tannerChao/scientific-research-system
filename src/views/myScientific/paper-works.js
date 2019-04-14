import React, { Component } from 'react';
import { Table } from 'antd';

class PaperWorks extends Component {
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
      columns: [{
        title: '卡号',
        dataIndex: 'name',
        widh:100,
        key: 'name',
        fixed: 'left',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '姓名',
        className: 'column-money',
        widh:100,
        key: 'age',
        fixed: 'left',
        dataIndex: 'money',
      }, {
        title: '类型',
        widh:150,
        dataIndex: 'address',
      }, {
        title: '期刊类型',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '文章论著名称',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: 'ISSN',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: 'CN',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: 'ISBN',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '发表时间',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '刊物或出版社',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '卷期数',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '完成字数',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '期刊级别',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '期刊性质',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '参与人数',
        widh:150,
        dataIndex: 'address1',
      }, {
        title: '本人排名',
        widh:150,
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
          
          scroll={{ x: 1500, y: 300 }}
        />,
        mountNode
      </div>

    );
  }
}
export { PaperWorks }