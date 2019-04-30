import { observable } from 'mobx'
import http from '../http'

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
class Store{

  @observable budget_conditions = {};
  @observable budget_result = {};
  @observable spining = false;

  setSpining(info){
    Store.spining = info
  }

}
const _self = new Store();
export default _self