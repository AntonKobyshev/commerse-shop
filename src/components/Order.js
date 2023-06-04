import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
        <div className='item'>
            <img alt='item-img' src={process.env.PUBLIC_URL + '/img/' + this.props.item.img } />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}$</b>
        </div>
    )
  }
}

export default Order