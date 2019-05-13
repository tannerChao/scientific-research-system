import React, { Component } from 'react';
import { Table,Modal,Radio, Input, notification } from 'antd';
import { inject, observer } from "mobx-react";
import { Loading } from '../../components'
import { get, hasIn } from 'lodash'

const confirm = Modal.confirm;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

@inject(store=>({
  get_experts: store.financial.getExperts,
  set_auditExperts: store.financial.setAuditExperts
})) 
@observer
class ExpertsAudits extends Component {
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
              dataIndex: '',
              render: text => <a href="javascript:;">详情</a>
            }, {
              title: '',
              dataIndex: '',
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
      this.getExperts({
        pageSize:1,
        pageRow:10
      })
    }

    setLoading = () =>{
      this.setState({
        spining: !this.state.spining
      }) 
    }

    getExperts = async info => {

      let { get_experts } = this.props;

      this.setLoading();

      let res = await get_experts({
        ...info
      });
      if(res.code===0 && res.success){
        this.setState({
          data: res.result
        })
      }else{
        notification['error']({
          message: res.error
        })
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

    render() {
        let { data, columns, spining, auditState, confirmLoading, auditObject, auditValue} = this.state;
        return (
            <div className='experts-audits'>
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
              <Loading spinning={spining} size="large" /> 
            </div>

        );
    }
}
export { ExpertsAudits }