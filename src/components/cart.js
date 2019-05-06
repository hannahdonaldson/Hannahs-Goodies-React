import React, { Component } from 'react';

export default class Cart extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            data: [],
            cart: [],
            number: 0
        }
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
    }

    add() {
        this.setState({
          number: this.state.number + 1
        });
      };

      sub() {
        this.setState({
          number: this.state.number - 1
        });
      };

    render() {
        return(
            <div className = 'cart-wrapper'>
                <div className="container">
                    <div className="header">
                    <h3 className="header-logo">Store</h3>
                
                    </div>
                    
                <div className="products">      
                </div>
                    
                <div className="shopping-cart">
                    <div className="shopping-cart-head">
                    <button className='inc' onClick={this.add}>Add</button>
                    <button className='dec' onClick={this.sub}>Subtract</button>    
                        <span className="product-quantity"> {this.state.number} </span> Product(s) in Cart
                    </div>
                    <ul className="shopping-cart-list">
                    </ul>
                    <div className="cart-buttons">
                        <a href="#0" className="button empty-cart-btn">Empty</a>
                        <a href="/checkout" className="button cart-checkout">Checkout - <span className="total-price">$0</span></a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}