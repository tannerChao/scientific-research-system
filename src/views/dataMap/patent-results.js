import React, { Component } from 'react';
import { Table, Input, Row, Col, DatePicker,Button } from 'antd';
import { filter, size } from 'lodash'

const Search = Input.Search;

class Patentresults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                key: '1',
                cardId: 'John Brown',
                name: '￥300,000.00',
                projectType: 'New York No. 1 Lake Park',
                projectAttr: 'New York No. 1 Lake Park',
                projectName: '学校',
              }, {
                key: '2',
                cardId: 'Jim Green',
                name: '￥1,256,000.00',
                projectType: 'London No. 1 Lake Park',
                projectAttr: 'New York No. 1 Lake Park',
                projectName: '老师',
              }, {
                key: '3',
                cardId: 'Joe Black',
                name: '￥120,000.00',
                projectType: 'Sidney No. 1 Lake Park',
                projectAttr: 'New York No. 1 Lake Park',
                projectName: '学生',
              },
              {
                key: '4',
                cardId: 'Joe Black4',
                name: '￥120,000.004',
                projectType: 'Sidney No. 1 Lake Park4',
                projectAttr: 'New York No. 1 Lake Park',
                projectName: '家属',
              }],

              viewData: [],

              columns : [{
                title: '卡号',
                dataIndex: 'cardId',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 100
              }, {
                title: '姓名',
                className: 'column-money',
                dataIndex: 'name',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 100
              }, {
                title: '项目类型',
                dataIndex: 'projectType',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 100
              }, {
                title: '项目性质',
                dataIndex: 'projectAttr',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 100
              }, {
                title: '项目名称',
                dataIndex: 'projectName',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 250
              }, {
                title: '项目级别',
                dataIndex: 'projectLevel',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 20
              }, {
                title: '立项时间',
                dataIndex: 'projectStartTime',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 250
              }, {
                title: '结题时间',
                dataIndex: 'projectEndTime',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 250
              }, {
                title: '研究状态',
                dataIndex: 'projectState',
              }, {
                title: '参与人数',
                dataIndex: 'projectPeople',
              }, {
                title: '本人排名',
                dataIndex: 'ranking',
              }, {
                title: '拨款金额',
                dataIndex: 'fundingAmount',
              }, {
                title: '到款金额',
                dataIndex: 'paragraphgAmount',
              }, {
                title: '验收结果',
                dataIndex: 'testResult',
              }, {
                title: '立项来源',
                dataIndex: 'projectSource',
              }, {
                title: '立项类型',
                dataIndex: 'getProjectType',
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
            <div className='patent-results patent-results-home'>
                <div className='content' style={{padding: ' 20px'}}>
                  <Row className='headers'>
                    <title>专利成果统计</title>
                  </Row>
                  <Row gutter={16} justify='space-between' style={{padding: '10px 0'}}>
                    <Col span={4}><Search placeholder="卡号/姓名/项目名称关键字" onSearch={this.finData} style={{ width: '100%' }} /></Col>
                    <Col span={4}><DatePicker onChange={this.timeChange} placeholder='开始时间' style={{ width: '100%' }}/></Col>
                    <Col span={4}><Button type="primary" onClick={this.getData}>导出数据</Button></Col>
                  </Row>
                  
                    <Table
                        width={1300}
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
export { Patentresults }