import { observable } from 'mobx'
import http from '../http'

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
class Budget{

  @observable budget_conditions = {};
  @observable budget_result = {};

  /**
   * @name: getBudget
   * @test: 获取项目预算
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async getBudget(info){  
    let res =await  http('getBudget',info)
    return res
  }

  /**
   * @name: setBudget
   * @test: 增加预算
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async setBudget(info){  
    let res =await  http('setBudget',info)
    return res
  }

  async deleteBudget(info){  
    let res =await  http('deleteBudget',info)
    return res
  } 
  
  
} 
const _self = new Budget();
export default _self