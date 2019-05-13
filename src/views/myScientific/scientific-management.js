import React, { Component } from 'react';
import { Row, Col, Form, Button, Table, Modal, Input, InputNumber, Select, DatePicker, Upload, message, Icon, } from 'antd';
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

class ScientificManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        name: 'KYXM20180615154541',
        money: '123',
        addressd: '院领导室',
        address1: '计财处已审核',
      }, {
        key: '2',
        name: 'KYXM20180615154541',
        money: '123',
        addressd: '院领导室',
        address1: '专家组审核中',
      }, {
        key: '3',
        name: 'KYXM20180615154541',
        money: '123',
        addressd: '院领导室',
        address1: '已结题',
      },
      {
        key: '4',
        name: 'KYXM20180615154541',
        money: '123',
        addressd: '院领导室',
        address1: '专家组已审核',
      }],
      columns: [{
        title: '项目编号',
        dataIndex: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '项目名称',
        className: 'column-money',
        dataIndex: 'money',
      }, {
        title: '申报部门',
        dataIndex: 'addressd',
      }, {
        title: '状态',
        dataIndex: 'address1',
      }, {
        title: '',
        dataIndex: '',
        render: text => <a href="javascript:;" onClick={()=>{this.opendetailed()}}>详情</a>
      }],
      detailedState: false
    }
  }


  // 详细

  opendetailed = () => {
    console.log(111)
    this.setState({
      detailedState: !this.state.detailedState
    })
  }

  detailedOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  detailedCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  render() {
    let { data, columns, detailedState } = this.state;

    return (
      <div className='scientific-management'>
        <div className='content'>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            style={{ width: 1300 }}
          />
        </div>
        {/* 详细 */}
        <Modal
          title="创新项目申报模块"
          visible={detailedState}
          onOk={this.detailedState}
          onCancel={this.opendetailed}
          wrapClassName='add-project-modal'
          width={900}

        >
           <div>
              <Row>
                <p>基本信息</p>
              </Row>
              {/* 你看表格1行有4列,然后就布局出这个样子了, */}
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>项目名称</Col>
                <Col span={8} className='padding-10'>状态数据采集平台</Col>
                <Col span={4} className='label'>项目类别</Col>
                <Col span={8} className='line padding-10'>理论研究</Col>

              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>项目性质</Col>
                <Col span={8} className='padding-10'>############</Col>
                <Col span={4} className='label'>项目级别</Col>
                <Col span={8} className='line padding-10'>###########</Col>

              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>项目规模</Col>
                <Col span={8} className='line padding-10'>大</Col>
                <Col span={4} className='label'>人员结构</Col>
                <Col span={8} className='padding-10'>师生</Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>计划完成该日期</Col>
                <Col span={8} className='line padding-10'>2019/5/8</Col>
                <Col span={4} className='label'>参与者（教工）</Col>
                <Col span={8} className='padding-10'>雷国荣</Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>成果与其形式</Col>
                <Col span={8} className='line padding-10'>成果应用报告</Col>
                <Col span={4} className='label'>参与者（学生）</Col>
                <Col span={8} className='padding-10'>罗永坚</Col>
              </Row>
              <Row className='add-project-modal-table' style={{ border: '1px solid #e4e4e4' }}>
                <Col span={4} className='label'>联系电话</Col>
                <Col span={8} className='line padding-10'>13570533193</Col>
                <Col span={4} className='label'>联系方式</Col>
                <Col span={8} className='padding-10'>13688893574</Col>
              </Row>

              <Row>
                <p>项目分工情况</p>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={2} className='label'>序号</Col>
                <Col span={4} className='line padding-10'>卡号</Col>
                <Col span={4} className='label'>姓名</Col>
                <Col span={4} className='padding-10'>身份</Col>
                <Col span={5} className='label'>职称</Col>
                <Col span={5} className='padding-10'>项目分工</Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={2} className='label'>1</Col>
                <Col span={4} className='line padding-10'>88001</Col>
                <Col span={4} className='label'>雷国荣</Col>
                <Col span={4} className='padding-10'>教师</Col>
                <Col span={5} className='label'>计算机应用副教授</Col>
                <Col span={5} className='padding-10'>项目申请人</Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={2} className='label'>1</Col>
                <Col span={4} className='line padding-10'>88001</Col>
                <Col span={4} className='label'>叶嘉伟</Col>
                <Col span={4} className='padding-10'>教师</Col>
                <Col span={5} className='label'>计算机应用副教授</Col>
                <Col span={5} className='padding-10'>项目负责人</Col>
              </Row>


              <Row>
                <p>项目主要内容和拟解决的问题</p>
              </Row>
              <Row>主要内容：</Row>
              <Row><TextArea rows={5} /></Row>
              <Row>拟解决问题：</Row>
              <Row><TextArea rows={5} /></Row>



              <Row><p>研究经费支出计划</p></Row>
              <Row className='add-project-modal-table'>
                <Col span={10} className='label'>支出科目</Col>
                <Col span={4} className='label'>金额(元)</Col>
                <Col span={10} className='label'>用途</Col>

              </Row>
              <Row className='add-project-modal-table'>
                <Col span={10} className='label'>1.科研业务费</Col>
                <Col span={4} className='label'></Col>
                <Col span={10} className='label'></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={10} className='label'>(1)科研测试、计算、分析、文献检索</Col>
                <Col span={4} className='Input'><Input /></Col>
                <Col span={10} className='Input'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={10} className='label'>(2)国内调研，小型会议，学术交流</Col>
                <Col span={4} className='Input'><Input /></Col>
                <Col span={10} className='Input'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table' >
                <Col span={10} className='label'>(3)科研劳务费</Col>
                <Col span={4} className='Input'><Input /></Col>
                <Col span={10} className='Input'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table' >
                <Col span={10} className='label'>2.图书资料费</Col>
                <Col span={4} className='Input'><Input /></Col>
                <Col span={10} className='Input'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table' >
                <Col span={10} className='label'>3.实验、材料费</Col>
                <Col span={4} className='Input'><Input /></Col>
                <Col span={10} className='Input'><Input /></Col>
              </Row>


              <Row><p>研究进度及阶段性成果</p></Row>
              <Row className='add-project-modal-table'>
                <Col span={8} className='label'>研究进度</Col>
                <Col span={16} className='label'>成果形式</Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={8} className='label'><MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} />至<MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} /></Col>
                <Col span={16} className='label'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={8} className='label'><MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} />至<MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} /></Col>
                <Col span={16} className='label'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={8} className='label'><MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} />至<MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} /></Col>
                <Col span={16} className='label'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={8} className='label'><MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} />至<MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} /></Col>
                <Col span={16} className='label'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={8} className='label'><MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} />至<MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} /></Col>
                <Col span={16} className='label'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={8} className='label'><MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} />至<MonthPicker onChange={this.Selectdate} placeholder="选择年月" style={{ width: '100px' }} /></Col>
                <Col span={16} className='label'><Input /></Col>
              </Row>
              <Row>
                <p>附件</p>
              </Row>
              <Row><Upload {...props}>
                <Button>
                  <Icon type="upload" /> 点击上传文件
                </Button>
              </Upload>,
              </Row>
              <p>项目审批</p>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>审核部门</Col>
                <Col span={4} className='label'>审核人</Col>
                <Col span={4} className='label'>审核时间</Col>
                <Col span={4} className='label'>审核状态</Col>
                <Col span={8} className='label'>审核意见</Col>
              </Row>

              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>财务审核</Col>
                <Col span={4} className='label'>雷国荣</Col>
                <Col span={4} className='label'>2019/4/20</Col>
                <Col span={4} className='label'>通过</Col>
                <Col span={8} className='label'>同意同意同意发水电费的身份是</Col>
              </Row>

              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>专家审核</Col>
                <Col span={4} className='label'>叶嘉伟</Col>
                <Col span={4} className='label'>2019/4/20</Col>
                <Col span={4} className='label'>通过</Col>
                <Col span={8} className='label'>同意同意同意发水电费的身份是</Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>科研处审核</Col>
                <Col span={4} className='label'>罗永坚</Col>
                <Col span={4} className='label'>2019/4/20</Col>
                <Col span={4} className='label'>通过</Col>
                <Col span={8} className='label'>同意同意同意发水电费的身份是</Col>
              </Row>
            </div>
        </Modal>

      </div>
    );
  }
}
export { ScientificManagement }