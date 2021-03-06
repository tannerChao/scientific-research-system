import React, { Component } from 'react';
import { Table,Modal,Radio, Input, notification, Select, DatePicker,Row, Col, message } from 'antd';
import { inject, observer } from "mobx-react";
import { Loading } from '../../components'
import { get } from 'lodash'

const RadioGroup = Radio.Group;
const { TextArea } = Input;
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

@inject(store=>({
  get_financial: store.financial.getFinancial,
  set_auditExperts: store.financial.setAuditExperts
})) 
@observer
class FinancialAudit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns : [{
              title: '项目编号',
              dataIndex: 'item_number',
              render: text => <a href="javascript:;">{text}</a>,
            }, {
              title: '项目名称',
              dataIndex: 'project_name',
            }, {
              title: '申报部门',
              dataIndex: 'department',
            }, {
              title: '状态',
              dataIndex: 'state',
              render: text=> <span>{this.getState(text)}</span>
            }, {
              title: '',
              dataIndex: 'address1',
              render: (text,record,index) => <a href="javascript:;" onClick={()=>{this.opendetailed(text,record,index)}}>详情</a>
            }, {
              title: '',
              dataIndex: 'address1',
              render: (text,record,index) => <a href="javascript:;" onClick={()=>{this.showCinfirmAudit(text,record,index)}}>审核</a>
            }],
            confirmLoading: false,
            auditState: false,
            auditObject: {},
            auditValue: 1,
            spining: false
        }
    }
    componentDidMount(){
      this.getFinancial({
        pageSize:1,
        pageRow:10
      })
    }

    setLoading = () =>{
      this.setState({
        spining: !this.state.spining
      }) 
    }

    getFinancial = async info => {

      let { get_financial } = this.props;
      this.setLoading();

      let res = await get_financial({
        ...info
      });
      if(res.code===0 && res.success){
        this.setState({
          data: res.result
        })
      }else{

      }

      this.setLoading();

    }

    auditSuccess = async () => {
      let { set_auditExperts } = this.props;
      let { auditObject } = this.state;

      this.setState({
        confirmLoading: !this.state.confirmLoading
      })

      let res = await set_auditExperts({
        item_number: auditObject.item_number
      });

      if(res.code===0 && res.success){
        notification['success']({
          message: '审核通过',
          description: '审核通过',
          style: {
            color: '#333',
          },
        })
      }else{
        notification['error']({
          message: res.error
        })
      }
      this.setState({
        auditState: false,
        confirmLoading: false,
      });

    }

    showCinfirmAudit = (text,record,index) => {
      console.log(record);
      this.setState({
        auditObject: record
      });
      this.setCinfirmAudit();
    }
    
    setCinfirmAudit  = () => {
      this.setState({
        auditState: !this.state.auditState
      })
    }
  
    auditChange = (e) => {
      this.setState({
        auditValue: e.target.value,
      });
    }

    getState = state => {
      let  stateText = '';
      switch (state){
        case 0:
          stateText = '不通过'
          break;
        case 1:
          stateText = '通过'
          break;
        default:
          stateText = '不通过'
      }
      return stateText
    }

     // 详细

  opendetailed = () => {
    this.setState({
      detailedState: !this.state.detailedState
    })
  }

  render() {
    let { data, columns, spining, auditState, confirmLoading, auditObject, auditValue, detailedState} = this.state;
    return (
        <div className='financial-audit'>
          <div className='content'>  
            <Table
                columns={columns}
                dataSource={data}
                bordered
                
            />
          </div>
          <Modal
            title={`请审核${get(auditObject,'project_name')}`}
            visible={auditState}
            onOk={this.auditSuccess}
            confirmLoading={confirmLoading}
            onCancel={this.setCinfirmAudit}
          >
            <RadioGroup onChange={this.auditChange} value={auditValue}>
              <Radio value={0}>不通过</Radio>
              <Radio value={1}>通过</Radio>
            </RadioGroup>
            {
              auditValue === 0 ? <TextArea rows={4} placeholder='请输入审核拒绝的原因' style={{margin: '24px 0 0 0'}}/> : null
            }  
          </Modal>

        {/* 详细 */}
        <Modal
          title="创新项目申报模块"
          visible={detailedState}
          onOk={this.opendetailed}
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
        <Loading spinning={spining} size="large" />
      </div>
    );
  }
}
export { FinancialAudit }