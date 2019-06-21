import React, { Component } from 'react';

import AddCart from './add_cart'


export default class AddBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            summary: '',
            cost: '',
            goodie_url: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit(event) {
        event.preventDefault();
        
        let title = this.state.title, summary = this.state.summary, cost = this.state.cost, goodie_url = this.state.goodie_url
        fetch ("https://hannahs-goodies-api.herokuapp.com/goodie/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({title: title, summary: summary, cost: cost, goodie_url: goodie_url})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => {console.log("Fetch Error " + err)})
    }


    render() {
        return(
            <div className = 'cart-wrapper'>
            <AddCart />
                <div className = "container">
                    <div className = "header">
                        <h3 class="header-logo">Store</h3>
                    </div>
                    <div class="products"></div>
                        <div class="shopping-cart">
                            <div class="shopping-cart-head">
                                <button class="inc">Add</button>
                                <button class="dec">Subtract</button>
                                <span class="product-quantity"> 0 </span> 
                                Product(s) in Cart
                                </div><ul class="shopping-cart-list"></ul>
                                <div class="cart-buttons"><a href="#0" class="button empty-cart-btn">Empty</a>
                                <a href="/checkout" class="button cart-checkout">Checkout - <span class="total-price">$0</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}