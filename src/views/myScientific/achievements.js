import React, { Component } from 'react';
import { Table, Row, Col, Divider, Button, Modal } from 'antd';

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
                key: '1',
                address: '雷国荣',
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
              addState: false

              
        }
    }

    add = () =>{
      //点击新增按项目时 函数执行的内容 就是弹框的Mode显示隐藏 这就是更改true false状态的意思
      this.setState({
        addState:!this.state.addState
      })
    }
    render() {
      //这俩面的意思就是取变量 相当于 this.state.data 的意思es6的写法,比较便捷简单
        let { data,data2, columns, columns2, addState } = this.state;
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
                              columns={columns}
                              dataSource={data}
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
                    width={211}
                >
                    
                </Modal>
            </div>
           
        );
    }
}
export { Achievements }