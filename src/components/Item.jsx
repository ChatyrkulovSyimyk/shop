import React, { Component } from 'react'
import { IoCart } from "react-icons/io5";
export default class Item extends Component {
  render() {
    return (
      <div >
        <div className='item' >
            <div onClick={() => this.props.onShowItem(this.props.item)}>
              <div className='item-img'>
                <img src={this.props.item.img} />
              </div>
              <div className='item-title'>
                  <h4>{this.props.item.title}</h4>
              </div>
              <div className='item-price'>
                  <h2>{this.props.item.price}</h2>
              </div>
            </div>
            <IoCart className='btn' onClick={() => this.props.onAdd(this.props.item)}/>
        </div>
      </div>
    )
  }
}
