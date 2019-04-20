import React, { Component } from 'react';
import { Table, Input, Row, Col, DatePicker,Button } from 'antd';
import { filter, size } from 'lodash'

const Search = Input.Search;

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
        <div className='sc-research-project sc-research-project-home'>
            <div className='content' style={{padding: ' 20px'}}>
              <Row className='headers'>
                <title>科研项目成果统计</title>
              </Row>
              <Row gutter={16} justify='space-between' style={{padding: '10px 0'}}>
                <Col span={4}><Search placeholder="卡号/姓名/项目名称关键字" onSearch={this.finData} style={{ width: '100%' }} /></Col>
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
export { ScResearchProject }