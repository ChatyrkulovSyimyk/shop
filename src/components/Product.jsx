import React, { Component } from 'react'
import { MdDelete } from "react-icons/md";

export default class Product extends Component {
  render() {
    return (
      <div className='product'>
            <div className='item'>
                <img className='img-product' src={this.props.item.img} />
                <h4 className='title-product'>{this.props.item.title}</h4>
                <h2 className='price-product'>{this.props.item.price}</h2>
                <MdDelete className='delete' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
      </div>
    )
  }
}
