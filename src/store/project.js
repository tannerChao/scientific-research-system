import { observable } from 'mobx'
import http from '../http'

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
class Project{

  @observable budget_conditions = {};
  @observable budget_result = {};

  /**
   * @name: getProject
   * @test: 获取项目列表
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async getProject(info){  
    let res =await  http('/methods/project/getList',info)
    return res
  }

  /**
   * @name: setProject
   * @test: 上传项目
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async setProject(info){  
    let res =await  http('/methods/project/add',info)
    return res
  }

  /**
   * @name: editorProject
   * @test: 编辑项目
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async editorProject(info){  
    let res =await  http('/methods/project/editor',info)
    return res
  } 

  /**
   * @name: editorProject
   * @test: 结题项目
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async endingProject(info){  
    let res =await  http('/methods/project/ending',info)
    return res
  } 

   /**
   * @name: upLoadProjectFile
   * @test: 上传附件
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async upLoadProjectFile(info){  
    let res =await  http('/methods/project/upLoadProjectFile',info)
    return res
  } 
  
} 
const _self = new Project();
export default _self