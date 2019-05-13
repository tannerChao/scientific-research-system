import React, { Component } from 'react';
import { Row, Col, notification, Button, Table, Modal, Input, InputNumber, Select, DatePicker, Upload, message, Icon, } from 'antd';
import { inject, observer } from "mobx-react";
import { Loading } from '../../components'

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


 @inject(store=>({
  get_project: store.project.getProject
})) 
@observer
class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //表格的列名，以及每一列的有什么功能
      columns: [{
        title: '项目编号',
        dataIndex: 'item_number',
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
        dataIndex: 'project_name',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
      }, {
        title: '执行状态',
        dataIndex: 'execution_state',
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
        dataIndex: 'state',
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
        title: '',
        dataIndex: 'address1',
        render: text => <a href="javascript:;" onClick={this.opendetailed} style={{ width: '100px', cursor: 'pointer' }}>详细</a>,
      }, {
        title: '',
        dataIndex: 'address1',
        render: text => <a href="javascript:;" style={{ width: '100px', cursor: 'pointer' }}>编辑</a>,
      }, {
        title: '',
        dataIndex: 'address1',
        render: text => <a href="javascript:;" style={{ width: '100px', cursor: 'pointer' }}>上传附件</a>,
      }, {
        title: '',
        dataIndex: 'address1',
        render: text => <a href="javascript:;" style={{ width: '100px', cursor: 'pointer' }}>结题</a>,
      }],
      //表格数据源
      data: [{
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
      modalPage4: false,
      modalPage5: false,
      modalPage6: false,
      modalSubmit: '下一步'

    }
  }

  componentDidMount(){
    this.getProject({
      pageSize: 1,
      pageRow: 10,
    })
  }

  getProject = async info => {
    let { get_project } = this.props;
    this.setLoading()
    let res = await get_project({
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

  setLoading = () =>{
    this.setState({
      spining: !this.state.spining
    }) 
  }

  onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }

  Selectdate = (date, dateString) => {
    console.log(date, dateString);
  }

  modalOk = () => {
    let { modalPage1, modalPage2, modalPage3, modalPage4, modalPage5, modalPage6 } = this.state
    if (modalPage1) {
      //假如第一个页面 ,点击了按钮,就显示 第二页 
      this.setState({
        modalPage1: false,
        modalPage2: true,
        modalPage3: false,
        modalPage4: false,
        modalPage5: false,
        modalPage6: false,
        modalSubmit: '下一步'
      })
    } else if (modalPage2) {
      //假如第二个页面 ,点击了按钮,就显示 第三页 
      this.setState({
        modalPage1: false,
        modalPage2: false,
        modalPage3: true,
        modalPage4: false,
        modalPage5: false,
        modalPage6: false,
        modalSubmit: '下一步'
      })
    } else if (modalPage3) {
      //假如第三个页面 ,点击了按钮,就显示 第四页 
      this.setState({
        modalPage1: false,
        modalPage2: false,
        modalPage3: false,
        modalPage4: true,
        modalPage5: false,
        modalPage6: false,
        modalSubmit: '下一步'
      })
    } else if (modalPage4) {
      //假如第四个页面 ,点击了按钮,就显示 第五页 
      this.setState({
        modalPage1: false,
        modalPage2: false,
        modalPage3: false,
        modalPage4: false,
        modalPage5: true,
        modalPage6: false,
        modalSubmit: '下一步'
      })
    } else if (modalPage5) {
      //假如第五个页面 ,点击了按钮,就显示 第六页 
      this.setState({
        modalPage1: false,
        modalPage2: false,
        modalPage3: false,
        modalPage4: false,
        modalPage5: false,
        modalPage6: true,
        modalSubmit: '提交'
      })
    }

  }
  modalOnCancel = () => {
    this.setState({
      modalState: !this.state.modalState,
      modalPage1: true,
      modalPage2: false,
      modalPage3: false,
      modalPage4: false,
      modalPage5: false,
      modalPage6: false,
      modalSubmit: '下一步'
    })
  }
  openModal = () => {
    this.setState({
      modalState: !this.state.modalState
    })
  }

  // 详细
  detailedOk = () => {
    let { detailedPage1, detailedPage2, detailedPage3, detailedPage4, detailedPage5, detailedPage6 } = this.state
    if (detailedPage1) {
      //假如第一个页面 ,点击了按钮,就显示 第二页 
      this.setState({
        detailedPage1: false,
        detailedPage2: true,
        detailedPage3: false,
        detailedPage4: false,
        detailedPage5: false,
        detailedPage6: false,
        detailedSubmit: '下一步'
      })
    } else if (detailedPage2) {
      //假如第二个页面 ,点击了按钮,就显示 第三页 
      this.setState({
        detailedPage1: false,
        detailedPage2: false,
        detailedPage3: true,
        detailedPage4: false,
        detailedPage5: false,
        detailedPage6: false,
        detailedSubmit: '下一步'
      })
    } else if (detailedPage3) {
      //假如第三个页面 ,点击了按钮,就显示 第四页 
      this.setState({
        detailedPage1: false,
        detailedPage2: false,
        detailedPage3: false,
        detailedPage4: true,
        detailedPage5: false,
        detailedPage6: false,
        detailedSubmit: '下一步'
      })
    } else if (detailedPage4) {
      //假如第四个页面 ,点击了按钮,就显示 第五页 
      this.setState({
        detailedPage1: false,
        detailedPage2: false,
        detailedPage3: false,
        detailedPage4: false,
        detailedPage5: true,
        detailedPage6: false,
        detailedSubmit: '下一步'
      })
    } else if (detailedPage5) {
      //假如第五个页面 ,点击了按钮,就显示 第六页 
      this.setState({
        detailedPage1: false,
        detailedPage2: false,
        detailedPage3: false,
        detailedPage4: false,
        detailedPage5: false,
        detailedPage6: true,
        detailedSubmit: '提交'
      })
    }

  }
  detailedOnCancel = () => {
    this.setState({
      detailedState: !this.state.detailedState,
      detailedPage1: true,
      detailedPage2: false,
      detailedPage3: false,
      detailedPage4: false,
      detailedPage5: false,
      detailedPage6: false,
      detailedSubmit: '下一步'
    })
  }
  opendetailed = () => {
    this.setState({
      detailedState: !this.state.detailedState
    })
  }


  handleChange = () => {

  }



  render() {
    let { columns, data, modalState, detailedState, spining} = this.state
    return (
      <div className='containers add-project'>
        <div className='content' style={{ padding: ' 20px' }}>
          <Row type="flex" justify="end" >
            <Button type="primary" onClick={this.openModal}>新增项目</Button>
          </Row>
          <Row style={{ margin: '20px 0 0 0' }}>
            <Table columns={columns} dataSource={data} />
          </Row>
        </div>

        {/* 新增项目 */}
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
            this.state.modalPage1 ? <div>
              <Row>
                <p>第一步：输入基本信息</p>
              </Row>
              {/* 你看表格1行有4列,然后就布局出这个样子了, */}
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>项目类别</Col>
                <Col span={8} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">技术开发</Option>
                    <Option value="#">基础研究</Option>
                    <Option value="#">应用研究</Option>
                    <Option value="#">试验与发展</Option>
                    <Option value="#">成果应用</Option>
                    <Option value="#">理论研究</Option>
                  </Select>
                </Col>
                <Col span={4} className='label'>项目名称</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>项目规模</Col>
                <Col span={8} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">小</Option>
                    <Option value="#">中</Option>
                    <Option value="#">大</Option>
                    
                  </Select>
                </Col>
                <Col span={4} className='label'>人员结构</Col>
                <Col span={8} className='padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">教师</Option>
                    <Option value="#">师生</Option>
                    
                  </Select>
                </Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>计划完成该日期</Col>
                <Col span={8} className='line padding-10'><DatePicker onChange={this.Selectdate} /></Col>
                <Col span={4} className='label'>参与者（教工）</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>成果与其形式</Col>
                <Col span={8} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">系列论文</Option>
                    <Option value="#">研究报告</Option>
                    <Option value="#">成果应用报告</Option>
                    <Option value="#">专利</Option>
                    <Option value="#">新产品</Option>
                    <Option value="#">新技术</Option>
                    <Option value="#">软件登记</Option>
                    <Option value="#">标准</Option>
                    <Option value="#">其他</Option>
                  </Select>
                </Col>
                <Col span={4} className='label'>参与者（学生）</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table' style={{ border: '1px solid #e4e4e4' }}>
                <Col span={4} className='label'>联系电话</Col>
                <Col span={8} className='line padding-10'><Input /></Col>
                <Col span={4} className='label'>联系方式</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>

              <Row>
                <p>*参与者可输入姓名或卡号，用半角的逗号分割。</p>
              </Row>
            </div> : null
          }
          {
            this.state.modalPage2 ? <div><Row>
              <p>第二步：填写项目分工情况</p>
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
              <Row className='add-project-modal-table' style={{ border: '1px solid #e4e4e4' }}>
                <Col span={4} className='label'>联系电话</Col>
                <Col span={8} className='line padding-10'><InputNumber placeholder="Basic usage" /></Col>
                <Col span={4} className='label'>联系方式</Col>
                <Col span={8} className='padding-10'><InputNumber placeholder="Basic usage" /></Col>
              </Row>

              <Row>
                <p>*请确定参与者的分工和顺序。</p>
              </Row></div> : null
          }
          {
            this.state.modalPage3 ? <div><Row>
              <p>第三步：填写项目主要内容和拟解决的问题</p>
            </Row>
              <row>主要内容：</row>
              <row><TextArea rows={5} /></row>
              <row>拟解决问题：</row>
              <row><TextArea rows={5} /></row>
            </div> : null
          }
          {
            this.state.modalPage4 ?
              <div>
                <Row><p>第四步：填写研究经费支出计划</p></Row>
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

                <row>
                  <p>*如不需要资金奖助请直接下一步。</p>
                </row>
              </div> : null
          }
          {
            this.state.modalPage5 ?
              <div>
                <Row><p>第五步：填写研究进度及阶段性成果</p></Row>
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
              </div> : null
          }
          {
            this.state.modalPage6 ? <div><Row>
              <p>第六步：上传附件，完成</p>
            </Row>
              <row><Upload {...props}>
                <Button>
                  <Icon type="upload" /> 点击上传文件
                </Button>
              </Upload>,
              </row>
              <row>
                <p>*可按需要上传项目申报附件。</p>
              </row>
            </div> : null
          }
        </Modal>
      
      {/* 详细 */}
      <Modal
          title="创新项目申报模块"
          visible={detailedState}
          onOk={this.detailedOk}
          onCancel={this.detailedOnCancel}
          wrapClassName='add-project-modal'
          width={800}
          okText={this.state.detailedSubmit}
        >
            <div>
              <Row>
                <p>基本信息</p>
              </Row>
              {/* 你看表格1行有4列,然后就布局出这个样子了, */}
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>项目类别</Col>
                <Col span={8} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">技术开发</Option>
                    <Option value="#">基础研究</Option>
                    <Option value="#">应用研究</Option>
                    <Option value="#">试验与发展</Option>
                    <Option value="#">成果应用</Option>
                    <Option value="#">理论研究</Option>
                  </Select>
                </Col>
                <Col span={4} className='label'>项目名称</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>项目规模</Col>
                <Col span={8} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">小</Option>
                    <Option value="#">中</Option>
                    <Option value="#">大</Option>
                    
                  </Select>
                </Col>
                <Col span={4} className='label'>人员结构</Col>
                <Col span={8} className='padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">教师</Option>
                    <Option value="#">师生</Option>
                    
                  </Select>
                </Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>计划完成该日期</Col>
                <Col span={8} className='line padding-10'><DatePicker onChange={this.Selectdate} /></Col>
                <Col span={4} className='label'>参与者（教工）</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={4} className='label'>成果与其形式</Col>
                <Col span={8} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">系列论文</Option>
                    <Option value="#">研究报告</Option>
                    <Option value="#">成果应用报告</Option>
                    <Option value="#">专利</Option>
                    <Option value="#">新产品</Option>
                    <Option value="#">新技术</Option>
                    <Option value="#">软件登记</Option>
                    <Option value="#">标准</Option>
                    <Option value="#">其他</Option>
                  </Select>
                </Col>
                <Col span={4} className='label'>参与者（学生）</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table' style={{ border: '1px solid #e4e4e4' }}>
                <Col span={4} className='label'>联系电话</Col>
                <Col span={8} className='line padding-10'><Input /></Col>
                <Col span={4} className='label'>联系方式</Col>
                <Col span={8} className='padding-10'><Input /></Col>
              </Row>

            </div>
          {
            this.state.detailedPage2 ? <div><Row>
              <p>项目分工情况</p>
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
              <Row className='add-project-modal-table' style={{ border: '1px solid #e4e4e4' }}>
                <Col span={4} className='label'>联系电话</Col>
                <Col span={8} className='line padding-10'><InputNumber placeholder="Basic usage" /></Col>
                <Col span={4} className='label'>联系方式</Col>
                <Col span={8} className='padding-10'><InputNumber placeholder="Basic usage" /></Col>
              </Row>
               </div> : null
          }
          {
            this.state.detailedPage3 ? <div><Row>
              <p>项目主要内容和拟解决的问题</p>
            </Row>
              <row>主要内容：</row>
              <row><TextArea rows={5} /></row>
              <row>拟解决问题：</row>
              <row><TextArea rows={5} /></row>
            </div> : null
          }
          {
            this.state.detailedPage4 ?<div>
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

                
              </div> : null
          }
          {
            this.state.detailedPage5 ?<div>
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
              </div> : null
          }
          {
            this.state.detailedPage6 ? <div><Row>
              <p>附件</p>
            </Row>
              <row><Upload {...props}>
                <Button>
                  <Icon type="upload" /> 点击上传文件
                </Button>
              </Upload>,
              </row>
              
            </div> : null
          }
        </Modal>
        <Loading spinning={spining} size="large" />
      </div>

    );
  }
}
export { AddProject }