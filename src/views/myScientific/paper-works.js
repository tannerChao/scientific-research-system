import React, { Component } from 'react';
import { Table, Input, Row, Col, DatePicker,Button } from 'antd';
import { filter, size } from 'lodash'

const Search = Input.Search;

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

  componentWillMount(){
  this.setState({
    viewData : this.state.data
  })
  }

  timeChange = () => {
  //时间选择
  }

  finData = e => {
    //查找数据
    let { data } = this.state;
    let array = filter(data,o=>{
        return o.cardId.indexOf(e) > -1 || o.name.indexOf(e) > -1 || o.projectName.indexOf(e)> -1
    })
    console.log(array);
    if(size(array)>0){
      this.setState({
        viewData: array
      })
    }
  }

  getData = () => {
  //导出数据
  }

  render() {
    let { viewData, columns } = this.state;
    return (
        <div className='paper-works paper-works-home'>
            <div className='content' style={{padding: ' 20px'}}>
              <Row className='headers'>
                <title>论文论著成果统计 </title>
              </Row>
              <Row gutter={16} justify='space-between' style={{padding: '10px 0'}}>
                <Col span={4}><Search placeholder="卡号/姓名/文章论著名称/刊物或出版社关键字" onSearch={this.finData} style={{ width: '100%' }} /></Col>
                <Col span={4}><DatePicker onChange={this.timeChange} placeholder='开始时间' style={{ width: '100%' }}/></Col>
                <Col span={4}><Button type="primary" onClick={this.getData}>导出数据</Button></Col>
              </Row>
              
                <Table
                    width={1305}
                    columns={columns}
                    dataSource={viewData}
                    scroll={{ x: 1300 }}
                    bordered
                />
            </div>
        </div>
    );
  }
}
export { PaperWorks }