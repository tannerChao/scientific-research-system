import React, { Component } from 'react';
import { Table, Input, Row, Col } from 'antd';
import { filter, size } from 'lodash'
const Search = Input.Search;

class Reimbursement extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [{
            key: '1',
            cardId: 'John Brown',
            name: '￥300,000.00',
            projectType: 'New York No. 1 Lake Park',
            projectAttr: '已结题',
            projectName: '学校',
          }, {
            key: '2',
            cardId: 'Jim Green',
            name: '￥1,256,000.00',
            projectType: 'London No. 1 Lake Park',
            projectAttr: '已结题',
            projectName: '老师',
          }, {
            key: '3',
            cardId: 'Joe Black',
            name: '￥120,000.00',
            projectType: 'Sidney No. 1 Lake Park',
            projectAttr: '已结题',
            projectName: '学生',
          },
          {
            key: '4',
            cardId: 'Joe Black4',
            name: '￥120,000.004',
            projectType: 'Sidney No. 1 Lake Park4',
            projectAttr: '已结题',
            projectName: '家属',
          }],

          viewData: [],

          columns : [{
            title: '项目编号',
            dataIndex: 'cardId',
            render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
            width: 100
          }, {
            title: '项目名称',
            className: 'column-money',
            dataIndex: 'name',
            render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
            width: 100
          }, {
            title: '申报部门',
            dataIndex: 'projectType',
            render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
            width: 100
          }, {
            title: '执行状态',
            dataIndex: 'projectAttr',
            render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
            width: 100
          }, {
            title: '项目名称',
            dataIndex: 'projectName',
            render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
            width: 250
          }, {
            title: '预算金额',
            dataIndex: 'projectLevel',
            render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
            width: 20
          }, {
            title: '',
            dataIndex: 'projectStartTime',
            render: text => <a href="javascript:;" className='td-span' style={{width:'100px',cursor: 'pointer'}}>支付</a>,
            width: 100
          }, ]
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
        <div className='reimbursement reimbursement-home'>
            <div className='content' style={{padding: ' 20px'}}>
              <Row gutter={16} justify='space-between' style={{padding: '10px 0'}}>
                <Col span={4}><Search placeholder="项目编号/项目名称" onSearch={this.finData} style={{ width: '100%' }} /></Col>
              </Row>
              
                <Table
                    width={1305}
                    columns={columns}
                    dataSource={viewData}
                    bordered
                />
            </div>
        </div>
    );
}
}
export { Reimbursement }