import React from 'react';

const Cart  = () => {
    return(
<div>
  <div className="container">
    <div className="header">
      <h3 className="header-logo">Store</h3>
      
      <div className="header-nav">
        <ul>
          <li><a href="#0">Home</a></li>
          <li><a href="#0">Products</a></li>
          </ul>
      </div>
    </div>
    
<div className="products">      
</div>
    
<div className="shopping-cart">
      <div className="shopping-cart-head">
        <span className="product-quantity">0</span> Product(s) in Cart
      </div>
      <ul className="shopping-cart-list">
      </ul>
      <div className="cart-buttons">
        <a href="#0" className="button empty-cart-btn">Empty</a>
        <a href="#0" className="button cart-checkout">Checkout - <span className="total-price">$0</span></a>
      </div>
    </div>
  </div>
  <div className="app-wrapper"></div>
</div>
)
}

export default Cart;