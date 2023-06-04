import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
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
          className={`shop-card-button ${cardOpen && "active"}`}
        />

        {cardOpen && <div className="shop-card"></div>}
      </div>
      <div className="presentation">
        <h2 className="title"> The best shops for You</h2>
        <p className="info"> with low prices</p>
      </div>
    </header>
  );
}
