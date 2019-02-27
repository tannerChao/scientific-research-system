import React, { Component } from 'react'
/**
 * 圆
 */
class Circle extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    render() {
        let {setInformPickupState} =this.props;
        return (
            <div className='circle-box' onClick={()=>{setInformPickupState()}}>
                <div className='circle' style={{...this.props.style}}>
                    {this.props.children}
                </div>
                {
                    this.props.tips?
                        <span className='tips'>{this.props.tips}</span>
                    :
                    null
                }
            </div>
        )
    }
}

export  {Circle}