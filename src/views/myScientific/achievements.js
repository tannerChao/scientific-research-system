import React, { Component } from 'react';
import { Row, Col, Form, Divider,Button, Table, Modal, Input, InputNumber, Select, DatePicker, Upload, message, Icon, } from 'antd';
const Option = Select.Option;
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

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //一个表格一个数据源data
            data: [{
                key: '1',
                name: 'John Brown',
                money: '￥300,000.00',
                address: 'New York No. ',
              }],
            data2: [{
                key: '2',
                address: '雷国荣',
                address1: '￥300,000.00',
                address2: 'New York No. ',
              }],
            data3: [{
                key: '3',
                address: '雷国荣1',
                address1: '￥300,000.00',
                address2: 'New York No. ',
              }],
              

        //论文著作
              columns : [{
                title: '类型',
                dataIndex: 'name',
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>,
                width: 100
              }, {
                title: '期刊类型',
                className: 'column-money',
                dataIndex: 'money',
                width: 100,
                render: text => <span href="javascript:;" className='td-span' style={{width:'100px'}}>{text}</span>
              }, {
                title: '文章论著名称',
                dataIndex: 'address',
                width: 200,
                render: text => <span href="javascript:;" className='td-span' style={{width:'200px'}}>{text}</span>,
              }, {
                title: 'ISSN',
                dataIndex: 'address2',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: 'CN',
                dataIndex: 'address3',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: 'ISBN',
                dataIndex: 'address4',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: '发表时间',
                dataIndex: 'address5',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: '刊物或出版社',
                dataIndex: 'address6',
                width: 150
              }, {
                title: '卷期数',
                dataIndex: 'address7',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: '完成字数',
                dataIndex: 'address8',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: '期刊级别',
                dataIndex: 'address9',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: '期刊性质',
                dataIndex: 'address10',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: '参与人数',
                dataIndex: 'address11',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }, {
                title: '本人排名',
                dataIndex: 'address12',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                width: 150,
              }],


           //科研项目
           columns2 : [{
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
          }],

          //专利成果
          columns3 : [{
            title: '是否专利',
            dataIndex: 'address',
          }, {
            title: '专利编号',
            dataIndex: 'address1',
          }, {
            title: '专利名称',
            dataIndex: 'address1',
          }, {
            title: '专利类型',
            dataIndex: 'address1',
          }, {
            title: '参与人数',
            dataIndex: 'address1',
          }, {
            title: '本人排名',
            dataIndex: 'address1',
          }, {
            title: '开始时间',
            dataIndex: 'address1',
          }, {
            title: '结束时间',
            dataIndex: 'address1',
          }, {
            title: '采纳机构',
            dataIndex: 'address1',
          }, {
            title: '采纳时间',
            dataIndex: 'address1',
          }, {
            title: '效益金额',
            dataIndex: 'address1',
          }],
              addState: false

              
        }
    }
    Selectdate = (date, dateString) => {
      console.log(date, dateString);
    }
    add = () =>{
      //点击新增按项目时 函数执行的内容 就是弹框的Mode显示隐藏 这就是更改true false状态的意思
      this.setState({
        addState:!this.state.addState
      })
    }
    render() {
      //这俩面的意思就是取变量 相当于 this.state.data 的意思es6的写法,比较便捷简单
        let { data,data2,data3,columns, columns2, columns3,addState } = this.state;
        return (
            <div className='achievements'>
              <div className='content' style={{padding: ' 20px'}}>
                    <Row type="flex" justify="end" >
                        <Button type="primary" onClick={this.add}>新增项目</Button>
                    </Row>
                    <Row style={{margin: '20px 0 0 0'}}>
                      <Row>
                          <Divider>论文著作</Divider>
                          <Table
                              columns={columns}
                              dataSource={data}
                              bordered
                              pagination={false}
                              scroll={{x: 2100, y: 300}}
                          />
                      </Row>

                        <Row>
                          <Divider>科研项目</Divider>
                          <Table
                              columns={columns2}
                              dataSource={data2}
                              bordered
                              pagination={false}
                              scroll={{x: 2100, y: 300}}
                          />
                      </Row> 

                      <Row>
                          <Divider>专利成果</Divider>
                          <Table
                              columns={columns3}
                              dataSource={data3}
                              bordered
                              pagination={false}
                              scroll={{x: 2100, y: 300}}
                          />
                      </Row>
                    </Row>
              </div>
              <Modal
                    title="项目附件管理"
                    visible={addState}
                    onOk={this.modalOk}
                    onCancel={this.add}
                    wrapClassName='achievements-add-modal'
                    width={900}
                >
                   <div>
              <Row className='add-project-modal-table'>
                <Col span={3} className='label'>成果类型：</Col>
                <Col span={5} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="论文论著">论文论著</Option>
                    <Option value="科研项目">科研项目</Option>
                    <Option value="专利成果">专利成果</Option>
                  </Select>
                </Col>

                <Col span={3} className='label'>论著名称*：</Col>
                <Col span={5} className='padding-10'><Input /></Col>

                <Col span={3} className='label'>论著类型：</Col>
                <Col span={5} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">论文</Option>
                    <Option value="lucy">专著</Option>
                    <Option value="disabled" >教材</Option>
                    <Option value="Yiminghe">编著</Option>
                  </Select>
                </Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={3} className='label'>期刊类型：</Col>
                <Col span={5} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">公共期刊</Option>
                    <Option value="#">内部期刊</Option>
                  </Select>
                </Col>

                <Col span={3} className='label'>期刊级别：</Col>
                <Col span={5} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="#">国家级</Option>
                    <Option value="#">省级</Option>
                    <Option value="#">市级</Option>
                    <Option value="#">院级</Option>
                    <Option value="#">无</Option>
                  </Select>
                </Col>

                <Col span={3} className='label'>期刊性质：</Col>
                <Col span={5} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">核心期刊</Option>
                    <Option value="lucy">非核心期刊</Option>
                    <Option value="disabled" >CSSCI</Option>
                  </Select>
                </Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={3} className='label'>ISSN：</Col>
                <Col span={5} className='line padding-10'><Input /></Col>

                <Col span={3} className='label'>CN：</Col>
                <Col span={5} className='padding-10'><Input /></Col>

                <Col span={3} className='label'>ISBN：</Col>
                <Col span={5} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={3} className='label'>期刊或出版社*：</Col>
                <Col span={5} className='padding-10'><Input /></Col>

                <Col span={3} className='label'>卷期数：</Col>
                <Col span={5} className='padding-10'><Input /></Col>

                <Col span={3} className='label'>完成字数*：</Col>
                <Col span={5} className='padding-10'><Input /></Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={3} className='label'>发表时间：</Col>
                <Col span={5} className='line padding-10'>
                <DatePicker onChange={this.Selectdate} />
                </Col>

                <Col span={3} className='label'>参与人数：</Col>
                <Col span={5} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                  </Select>
                </Col>

                <Col span={3} className='label'>本人排名：</Col>
                <Col span={5} className='line padding-10'>
                  <Select defaultValue="--请选择--" style={{ width: 120 }} onChange={this.handleChange}>
                  <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                  </Select>
                </Col>
              </Row>
              <Row className='add-project-modal-table'>
                <Col span={3} className='label'>影响因子：</Col>
                <Col span={5} className='padding-10'><Input /></Col>

                <Col span={3} className='label'>收录说明：</Col>
                <Col span={5} className='padding-10'><Input /></Col>

                <Col span={3} className='label'></Col>
                <Col span={5} className='label'></Col>
              </Row>
              <Row className='add-project-modal-table'>
              <Col span={3} className='label'>证明材料：</Col>
              <Col span={3} className='label'>
              <Upload {...props}>
                <Button>
                  <Icon type="upload" /> 上传文件
                </Button>
              </Upload>
              </Col>
              </Row>
             
              <Row>
                <p>*参与者可输入姓名或卡号，用半角的逗号分割。</p>
              </Row>
            </div>
                </Modal>
            </div>
           
        );
    }
}
export { Achievements }