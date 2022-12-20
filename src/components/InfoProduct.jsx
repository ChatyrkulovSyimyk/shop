import React, { Component } from 'react'
import { IoCart, IoCloseCircle } from "react-icons/io5";

export class InfoProduct extends Component {
    render() {
        return (
            <div className='full-item'>
                <div className='full-item-blog'>
                    <IoCloseCircle className='close' onClick={() => this.props.onShowItem(this.props.item)} />
                     <div className='item-img'>
                    <img src={this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                    </div>
                    <div className='item-title'>
                        <h4>{this.props.item.title}</h4>
                    </div>
                    <div className='item-descr'>
                        <h4>{this.props.item.descr}</h4>
                    </div>
                    <div className='item-price'>
                        <h2>{this.props.item.price}</h2>
                    </div>
                    <IoCart className='btn' onClick={() => this.props.onAdd(this.props.item)}/>
                </div>
            </div>
        )
    }
}

export default InfoProduct