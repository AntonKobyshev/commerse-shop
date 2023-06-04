import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let amount = 0
  props.orders.forEach(el => amount += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='amount'>Total amount: {new Intl.NumberFormat().format(amount)}$</p>
    </div>)
}

const showEmpty = () => {
  return (
    <div className="empty">
      <h2>Shopping cart is empty</h2>
    </div>
  );
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Delivery from shops</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaShoppingBasket
          onClick={() => setCardOpen((cardOpen = !cardOpen))}
          size={24}
          className={`shop-card-button ${cardOpen && 'active'}`}
        />

        {cardOpen && (
          <div className="shop-card">
            {props.orders.length > 0 ? showOrders(props) : showEmpty()}
          </div>
        )}
      </div>
      <div className="presentation">
        <h2 className="title"> The best shops for You</h2>
        <p className="info"> with low prices</p>
      </div>
    </header>
  );
}
