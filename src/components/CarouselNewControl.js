import React, { Component } from 'react'
import {Row,Col,Carousel,Icon} from 'antd';

import {size} from 'lodash'
/**
 * 可控跑马灯
 */

class CarouselNewControl extends Component {
    constructor(props){
        super(props)
        this.state={
            current:1
        }
        this.carouselRef = null;

        this.setCarouselRef = el => {
            this.carouselRef = el;
        };
    }
    Next=()=>{
        let {current}=this.state;
        let {data}=this.props;
        if(current<size(data)){
            this.carouselRef.next();
        }
    }
    Prev=()=>{
        let {current}=this.state;
        if(current>=1){
            this.carouselRef.prev();
        }
    }
    change=current=>{
        this.setState({current:++current})
    }
    render() {
        let {data}=this.props;
        return (
            <div>
                <Row>
                    <Carousel  dots={false} ref={this.setCarouselRef} afterChange={this.change}>
                        {
                            data.map((o,i)=>{
                                return this.props.children
                            })
                        }
                    </Carousel>
                </Row>
                <div style={{width:'40%',margin:'0 auto'}}>
                    <Row>
                        <Col span={6} style={{textAlign:'left',cursor:'pointer'}} onClick={this.Prev}><Icon type="left" /></Col>
                        <Col span={12} style={{textAlign:'center'}}><span>{`${this.state.current}/${size(data)}`}</span></Col>
                        <Col span={6} style={{textAlign:'right',cursor:'pointer'}} onClick={this.Next}><Icon type="right" /></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export  {CarouselNewControl}