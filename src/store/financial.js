import { observable } from 'mobx'
import http from '../http'

class Financial{

  @observable budget_conditions = {};
  @observable budget_result = {};

  /**
   * @name: getFinancial
   * @test: 获取财务审核记录
   * @msg: 
   * @param {type} 
   * @return: {code:0,success:true} 
   */
  async getFinancial(info){  
    let res =await  http('getFinancial',info)
    return res
  }
  
  async getExperts(info){  
    let res =await  http('getExperts',info)
    return res
  }

  async setAuditExperts(info){  
    let res =await  http('setAuditExperts',info)
    return res
  }
  
  async setAuditFinancial(info){  
    let res =await  http('setAuditFinancial',info)
    return res
  }

} 
const _self = new Financial();
export default _self