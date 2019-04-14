import React, { Component } from 'react';
import { Row, Col, Form, Button, Table, Modal, Input, InputNumber, Select } from 'antd';
const Option = Select.Option;

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //表格的列名，以及每一列的有什么功能
            columns : [{
                title: '项目编号',
                dataIndex: 'name',
                filters: [{
                  text: 'Joe',
                  value: 'Joe',
                }, {
                  text: 'Jim',
                  value: 'Jim',
                }, {
                  text: 'Submenu',
                  value: 'Submenu',
                  children: [{
                    text: 'Green',
                    value: 'Green',
                  }, {
                    text: 'Black',
                    value: 'Black',
                  }],
                }],
                // specify the condition of filtering result
                // here is that finding the name started with `value`
                onFilter: (value, record) => record.name.indexOf(value) === 0,
                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ['descend'],
              }, {
                title: '项目名称',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
              }, {
                title: '执行状态',
                dataIndex: 'address',
                filters: [{
                  text: 'London',
                  value: 'London',
                }, {
                  text: 'New York',
                  value: 'New York',
                }],
                filterMultiple: false,
                onFilter: (value, record) => record.address.indexOf(value) === 0,
                sorter: (a, b) => a.address.length - b.address.length,
                sortDirections: ['descend', 'ascend'],
              }, {
                title: '状态',
                dataIndex: 'address',
                filters: [{
                  text: 'London',
                  value: 'London',
                }, {
                  text: 'New York',
                  value: 'New York',
                }],
                filterMultiple: false,
                onFilter: (value, record) => record.address.indexOf(value) === 0,
                sorter: (a, b) => a.address.length - b.address.length,
                sortDirections: ['descend', 'ascend'],
              }, {
                title: '1111',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">{text}</a>,
              }, {
                title: '2222',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">{text}</a>,
              }, {
                title: '3333',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">{text}</a>,
              }, {
                title: '44444',
                dataIndex: 'address1',
                render: text => <a href="javascript:;">{text}</a>,
              }],
              //表格数据源
              data : [{ 
                key: '1',
                name: 'KYXM20180615154541',
                age: '项目名称',
                address: '已结题',
                state: '详细',
              }, {
                key: '2',
                name: 'KYXM20180615154541',
                age: '项目名称',
                address: '已结题',
                state: '详细',
              }, {
                key: '3',
                name: 'KYXM20180615154541',
                age: '项目名称',
                address: '已结题',
                state: '详细',
              }, {
                key: '4',
                name: 'KYXM20180615154541',
                age: '项目名称',
                address: '已结题',
                state: '详细',
              }],

              modalState: false,
              modalPage1: true,
              modalPage2: false,
              modalPage3: false,
              modalSubmit: '下一步'

        }
    }

    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    }

    modalOk = () =>{
      let { modalPage1,modalPage2 } = this.state
      if(modalPage1){
        //假如第一个页面 ,点击了按钮,就显示 第二页 
        this.setState({
          modalPage1: false,
          modalPage2:  true,
          modalPage3: false,
          modalSubmit:  '下一步'
        })
      }else if(modalPage2){
        //假如第二个页面 ,点击了按钮,就显示 第三页 
        this.setState({
          modalPage1: false,
          modalPage2: false,
          modalPage3: true,
          modalSubmit:  '提交'
        })
      }
      
    }
    modalOnCancel = () =>{
        this.setState({
          modalState: !this.state.modalState,
          modalPage1: true,
          modalPage2: false,
          modalSubmit: '下一步'
        })
    }
    openModal = () =>{
        this.setState({
            modalState: !this.state.modalState
        })
    }
    handleChange = () =>{

    }


    render() {
        let {columns,data,modalState} = this.state
        return (
            <div className='containers add-project'>
                <div className='content' style={{padding: ' 20px'}}>
                    <Row type="flex" justify="end" >
                        <Button type="primary" onClick={this.openModal}>新增项目</Button>
                    </Row>
                    <Row style={{margin: '20px 0 0 0'}}>
                        <Table columns={columns} dataSource={data}  />
                    </Row>
                </div>
                <Modal
                    title="创新项目申报模块"
                    visible={modalState}
                    onOk={this.modalOk}
                    onCancel={this.modalOnCancel}
                    wrapClassName='add-project-modal'
                    width={800}
                    okText={this.state.modalSubmit}
                >
                {
                  this.state.modalPage1? <div>
                    <Row>
                        <p>第一步：输入基本信息</p>
                    </Row>
                    {/* 你看表格1行有4列,然后就布局出这个样子了, */}
                    <Row className='add-project-modal-table'>
                        <Col span={4} className='label'>项目类别</Col>
                        <Col span={8} className='line padding-10'>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Col>
                        <Col span={4} className='label'>项目类别</Col>
                        <Col span={8} className='padding-10'><Input placeholder="Basic usage" /></Col>
                    </Row>
                    <Row className='add-project-modal-table'>
                        <Col span={4} className='label'>项目规模</Col>
                        <Col span={8} className='line padding-10'>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Col>
                        <Col span={4} className='label'>人员结构</Col>
                        <Col span={8} className='padding-10'>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row className='add-project-modal-table'>
                        <Col span={4} className='label'>计划完成该日期</Col>
                        <Col span={8} className='line padding-10'><Input placeholder="Basic usage" /></Col>
                        <Col span={4} className='label'>参与者（教工）</Col>
                        <Col span={8} className='padding-10'><Input placeholder="Basic usage" /></Col>
                    </Row>
                    <Row className='add-project-modal-table'>
                        <Col span={4} className='label'>成果与其形式</Col>
                        <Col span={8} className='line padding-10'>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Col>
                        <Col span={4} className='label'>参与者（学生）</Col>
                        <Col span={8} className='padding-10'><Input placeholder="Basic usage" /></Col>
                    </Row>
                    <Row className='add-project-modal-table' style={{border: '1px solid #e4e4e4'}}>
                        <Col span={4} className='label'>联系电话</Col>
                        <Col span={8} className='line padding-10'><InputNumber placeholder="Basic usage" /></Col>
                        <Col span={4} className='label'>联系方式</Col>
                        <Col span={8} className='padding-10'><InputNumber placeholder="Basic usage" /></Col>
                    </Row>

                    <Row>
                        <p>*参与者可输入姓名或卡号，用半角的逗号分割。</p>
                    </Row>
                  </div>:null
                }
                  {
                    this.state.modalPage2?<div>第二页</div>:null
                  }  
                </Modal>
            </div>

        );
    }
}
export { AddProject }