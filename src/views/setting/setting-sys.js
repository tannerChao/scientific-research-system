import React, { Component } from 'react';
import { Row, Col, notification, Button, Table, Modal, Input, InputNumber, Select, DatePicker, Upload, message, Icon, } from 'antd';
import { inject, observer } from "mobx-react";
const Option = Select.Option;
const { TextArea } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


class SettingSys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //表格的列名，以及每一列的有什么功能
            data: [{
                key: '1',
                name: '科研处',
                money: '叶嘉伟',
                address: '80032',
                address1: '报账管理',
            }, {
                key: '2',
                name: '院领导室',
                money: 'admin',
                address: '9999',
                address1: '报账管理',
            }, {
                key: '3',
                name: '科研处',
                money: '刘红',
                address: '10393',
                address1: '计财处审核人员',
            },
            {
                key: '4',
                name: '院领导室',
                money: 'admin',
                address: '9999',
                address1: '计财处审核人员',
            }],
            columns: [{
                title: '部门',
                dataIndex: 'name',
                render: text => <a href="javascript:;">{text}</a>,
            }, {
                title: '姓名',
                className: 'column-money',
                dataIndex: 'money',
            }, {
                title: '卡号',
                dataIndex: 'address',
            }, {
                title: '属性',
                dataIndex: 'address1',
            }, {
                title: '',
                dataIndex: 'address1',
                render: text => <a href="javascript:;" onClick={this.opendetailed}>刪除</a>
            }],

            data1: [{
                key: '1',
                name: '科研处',
                money: '雷国荣',
                address: '80032',
                address1: '报账管理',
            }, {
                key: '2',
                name: '院领导室',
                money: 'admin',
                address: '9999',
                address1: '报账管理',
            }, {
                key: '3',
                name: '科研处',
                money: '刘红',
                address: '10393',
                address1: '计财处审核人员',
            },
            {
                key: '4',
                name: '院领导室',
                money: 'admin',
                address: '9999',
                address1: '计财处审核人员',
            }],
            columns1: [{
                title: '部门',
                dataIndex: 'name',
                render: text => <a href="javascript:;">{text}</a>,
            }, {
                title: '姓名',
                className: 'column-money',
                dataIndex: 'money',
            }, {
                title: '卡号',
                dataIndex: 'address',
            }, {
                title: '属性',
                dataIndex: 'address1',
            }, {
                title: '',
                dataIndex: 'address1',
                render: text => <a href="javascript:;" onClick={this.opendetailed}>刪除</a>
            }]
        }
    }
    render() {
        let { columns, data,columns1, data1 } = this.state
        return (
            <div className='containers add-project'>
                <div>
                <Row className='add-project-modal-table'>
                <Col span={2} className='label'>管理員設置:</Col>
                <Col span={3} className='padding-10'>
                    <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">保卫处</Option>
                    <Option value="#">武裝部</Option>
                    <Option value="#">院领导室</Option>
                    
                  </Select>
                  </Col>
                <Col span={3} className='label'>
                    <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">刘亚军</Option>
                    <Option value="#">曹卫军</Option>
                    
                  </Select>
                  </Col>
                <Col span={3} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">计财处审核人员</Option>
                    <Option value="#">科研处审核人员</Option>
                   
                  </Select>
                </Col>
                <Col span={3} className='label'><Button type="primary" onClick={this.openModal}>添加</Button></Col>
                
              </Row>
                </div>
                <div className='home'>
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        style={{ width: 1300 }}
                    />
                </div>

                <div>
                <Row className='add-project-modal-table'>
                <Col span={3} className='label'>专家组成员设置:</Col>
                <Col span={3} className='padding-10'>
                    <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">保卫处</Option>
                    <Option value="#">武裝部</Option>
                    <Option value="#">院领导室</Option>
                    
                  </Select>
                  </Col>
                <Col span={3} className='label'>
                    <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">刘亚军</Option>
                    <Option value="#">曹卫军</Option>
                    
                  </Select>
                  </Col>
                <Col span={3} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">计财处审核人员</Option>
                    <Option value="#">科研处审核人员</Option>
                   
                  </Select>
                </Col>
                <Col span={3} className='label'><Button type="primary" onClick={this.openModal}>添加</Button></Col>
                
              </Row>
                </div>
                <div className='home'>
                    <Table
                        columns={columns1}
                        dataSource={data1}
                        bordered
                        style={{ width: 1300 }}
                    />
                </div>
            </div>
        );
    }
}
export { SettingSys }