import React, { Component } from 'react'
import noOrderImg from './../assets/images/icon-nobills.png';


export class HasNoInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let { message } = this.props
        return (<div className="has-no-infomation">
            <img src={noOrderImg} alt="暂无数据" />
            <p>{message.title}</p>
            <p>{message.description}</p>
            {message.subDescription ? <p>{message.subDescription}</p> : null}
        </div>)

    }

}







