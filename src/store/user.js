import { observable } from 'mobx'
import http from '../http'

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
class User{

  @observable info = {};

  async getKey(){  
    let res =await  http('user/key',{})
    return res
  }

  async getLogin(info){  
    let res =await  http('/methods/user/login',info)
    return res
  }

  setUserinfo(info){  
    localStorage.setItem('userInfo', info);
    let obj = Object.assign({},_self.info,info)
    _self.info = obj
  }
  
  getUserinfo(){
    return  _self.info || localStorage.getItem('userInfo')
  }

}
const _self = new User();
export default _self