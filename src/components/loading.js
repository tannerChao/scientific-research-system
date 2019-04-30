import React, { Component } from 'react';
import { Spin } from 'antd';
class Loading extends Component {
    render() {
        return (
            this.props.spinning?
              <div className='loading'> 
                  <Spin {...this.props} />        
              </div>
            :
              null
        );
    }
}
export { Loading }