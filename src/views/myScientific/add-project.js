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
              }],
              //表格数据源
              data : [{ 
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                state: 'New York No. 1 Lake Park',
              }, {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                state: 'New York No. 1 Lake Park',
              }, {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                state: 'New York No. 1 Lake Park',
              }, {
                key: '4',
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park',
                state: 'New York No. 1 Lake Park',
              }],

              modalState: false,

        }
    }

    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    }

    modalOk = () =>{

    }
    modalOnCancel = () =>{

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
                    onCancel={this.openModal}
                    wrapClassName='add-project-modal'
                    width={800}
                >
                    <Row>
                        <p>第一步：输入基本信息</p>
                    </Row>
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
                </Modal>
            </div>

        );
    }
}
export { AddProject }