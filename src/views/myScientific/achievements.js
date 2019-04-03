import React, { Component } from 'react';
import { Table, Row, Col, Divider, Button, Modal } from 'antd';

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                key: '1',
                name: 'John Brown',
                money: '￥300,000.00',
                address: 'New York No. 1sdfsdfsdfsfsfds',
              }],


              columns : [{
                title: '类型',
                dataIndex: 'name',
                render: text => <a href="javascript:;">{text}</a>,
                width: 150
              }, {
                title: '期刊类型',
                className: 'column-money',
                dataIndex: 'money',
                width: 150
              }, {
                title: '文章论著名称',
                dataIndex: 'address',
                width: 150,
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
              }, {
                title: 'ISSN',
                dataIndex: 'address2',
                render: text => <span href="javascript:;" className='td-span' style={{width:'150px'}}>{text}</span>,
                
              }, {
                title: 'CN',
                dataIndex: 'address3',
                width: 150
              }, {
                title: 'ISBN',
                dataIndex: 'address4',
                width: 150
              }, {
                title: '发表时间',
                dataIndex: 'address5',
                width: 150
              }, {
                title: '刊物或出版社',
                dataIndex: 'address6',
                width: 150
              }, {
                title: '卷期数',
                dataIndex: 'address7',
                width: 150
              }, {
                title: '完成字数',
                dataIndex: 'address8',
                width: 150
              }, {
                title: '期刊级别',
                dataIndex: 'address9',
                width: 150
              }, {
                title: '期刊性质',
                dataIndex: 'address10',
                width: 150
              }, {
                title: '参与人数',
                dataIndex: 'address11',
                width: 150
              }, {
                title: '本人排名',
                dataIndex: 'address12',
                width: 150
              }],

              addState: false
        }
    }

    add = () =>{
      this.setState({
        addState:!this.state.addState
      })
    }
    render() {
        let { data, columns, addState } = this.state;
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
                              scroll={{x: 2111, y: 300}}
                          />
                      </Row>

                        <Row>
                          <Divider>科研项目</Divider>
                          <Table
                              columns={columns}
                              dataSource={data}
                              bordered
                              pagination={false}
                              scroll={{x: 2111, y: 300}}
                          />
                      </Row> 

                      <Row>
                          <Divider>专利成果</Divider>
                          <Table
                              columns={columns}
                              dataSource={data}
                              bordered
                              pagination={false}
                              scroll={{x: 2111, y: 300}}
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
                    width={2111}
                >
                    
                </Modal>
            </div>
           
        );
    }
}
export { Achievements }