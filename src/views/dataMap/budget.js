import React, { Component } from 'react';
import { Table,Input, Row, Col,Button, notification, Modal } from 'antd';
import { Loading } from '../../components'
import { inject, observer } from "mobx-react";
import { delay } from 'lodash'
const confirm = Modal.confirm;

@inject(store=>{
  console.log(store.budget);return {
  get_Budget:store.budget.getBudget,
  set_Budget:store.budget.setBudget,
  set_Spining:store.store.setSpining,
  delete_Budget:store.budget.deleteBudget,
  spining: store.store.spining,
}})
@observer
class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

              columns : [{
                title: '经费名称',
                dataIndex: 'item_number',
                render: text => <a href="javascript:;">{text}</a>,
              }, {
                title: '经费预算',
                className: 'column-money',
                dataIndex: 'unit_price',
              }, {
                title: '录入人',
                dataIndex: 'entry_person',
              }, {
                title: '',
                dataIndex: '',
                render: text => <a href="javascript:;">查看经费使用情况</a>,
              }, {
                title: '',
                dataIndex: 'del',
                render: (text,record,index) => <a href="javascript:;" onClick={()=>{this.showDeleteConfirm(text,record,index)}}>删除</a>,
              }],
              addBudgetState: false,
              spining: false,
        }
    }
    
    componentDidMount(){
      this.getBudget({
        pageSize: 1,
        pageRow: 10
      })
    }

    setLoading = () =>{
      this.setState({
        spining: !this.state.spining
      }) 
    }

    showDeleteConfirm = (text,record,index) => {
      let that = this;
      confirm({
        title: '确定删除该预算记录?',
        okText: '确定',
        cancelText: '取消',
        onOk() {
          that.deleteBudget(text,record,index);
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }

    /**
     * @name: deletebudget
     * @test: //提交删除
     * @msg: 
     * @param {type} 
     * @return: 
     */
    deleteBudget = async (text,record,index) =>{
      let { delete_Budget } = this.props;
      console.log(record)
      this.setLoading()
      let  res = await delete_Budget({
        key: record.key
      })
      if(res.code===0 && res.success){
        notification['success']({
          message: '删除成功',
          description: '删除成功',
          style: {
            color: '#333',
          },
        })
      }else{

      }
      this.setLoading()

    }

    /**
     * @name: getBudget
     * @test: 获取预算记录
     * @msg: 
     * @param {pageSize,pageRow,pageSearch} 
     * @return: 
     */
    getBudget = async (info) => {
      let { get_Budget } = this.props;
      let { pageSearch } = this.state;

      this.setLoading()

      let res = await get_Budget({
        ...info,
        pageSearch
      });
      console.log(res);
      if(res.success && res.code === 0){
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
    /**
     * @name: AddBudget
     * @test: 增加项目预算--弹框
     * @msg: 
     * @param {type} 
     * @return: 
     */

    AddBudget = () => {
      this.setState({
        addBudgetState: this.state.addBudgetState
      })
    }

    /**
     * @name: setBudget
     * @test: 增加项目预算--set提交
     * @msg: 
     * @param {type} 
     * @return: 
     */
    setBudget = async info =>{
      let { set_Budget } = this.props;

      let res = await set_Budget({
        ...info,
      });
      if(res.success && res.code === 0){
        this.setState({
            data: res.data
        })
      }else{
        notification['error']({
          message: res.error
        })
      }
    }

    render() {
        let { data, columns, spining } = this.state;

        return (
            <div className='budget budget-home'>
                <div className='content' style={{padding: ' 20px'}}>
                    <Row gutter={16} justify='space-between' style={{padding: '10px 0'}}>
                      <Col span={4}><Input placeholder="经费名称" />,</Col>
                      <Col span={4}><Input placeholder="经费预算" />,</Col>
                      <Col span={4}><Button type="primary" onClick= {this.AddBudget}>添加</Button></Col>
                    </Row>    
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                    />
                </div> 
                <Loading spinning={spining} size="large" /> 
          </div>

        );
    }
}
export { Budget }