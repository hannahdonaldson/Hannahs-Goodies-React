import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Link from 'react-router-dom';

export default class ViewGoodie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            singleGoodie: [],
            addToCart: true,
            cartNumberItems: false,
            numberOfItems: 1
        }
        this.addToCart = this.addToCart.bind(this)
        this.addNumberItemToCart = this.addNumberItemToCart.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params

        fetch(`https://hannahs-goodies-api.herokuapp.com/goodie/${id}`, {
            method: 'GET',
            header: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({singleGoodie: data});})
        .catch(err => {console.log("Fetch Error" + err);})
    }

    addNumberItemToCart() {
        this.setState({numberOfItems: event.target.value});
    }

    addToCart() {
        this.setState({
            cartNumberItems: true
        })
        console.log('You added this to your cart')

        {<Redirect push to={'/cart'} />}
    }

    render() {
        return(
            <div className="view-goodies">

            <button onClick = {this.addToCart} style = {{display: this.state.addToCart ? 'grid' : 'none'}}> Add to Cart </button>
            
            
            <form>
                <label style = {{display: this.state.cartNumberItems ? 'none' : 'grid'}}>
                    <div>
                    <select value={this.state.numberOfItems} onChange={this.addNumberItemToCart} className = 'qty'>
                        <option value="1">1 Dozen</option> 
                        <option value="2">2 Dozen</option> 
                        <option value="3">3 Dozen</option> 
                        <option value="4">4 Dozen</option> 
                    </select>
                    </div>
                </label>
            </form>
                <div className = 'view-goodie-info'>
                    <h1 className = 'title'>{this.state.singleGoodie[1]}</h1>
                    <h3 className = 'summary'>{this.state.singleGoodie[2]}</h3>
                    <h2 className = 'cost'>${this.state.singleGoodie[3]}</h2>
                    <h2 className = 'goodie-type'>Goodie Type: {this.state.singleGoodie[4]}</h2>
                    <img className = 'img' src={this.state.singleGoodie[5]} />
                </div>
            </div>
        )
    }
}