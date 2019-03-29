import React, { Component } from 'react';


export default class AddGoodie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            summary: '',
            cost: '',
            goodieType: '',
            quantity: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit(event) {
        event.preventDefault();
        
        let title = this.state.title
        let summary = this.state.summary
        let cost = this.state.cost
        let goodieType = this.state.goodieType
        let quantity = this.state.quantity

        fetch ("https://book-api-practice.herokuapp.com/book/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({title: title, summary: summary, cost: cost, goodieType: goodieType, quantity: quantity})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => {console.log("Fetch Error" + err)})
    }


    render() {
        return(
            <div className = 'goodies'>
                <h1>Add a Book Below</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <label>Summary</label>
                    <input type="text" name="summary" value={this.state.summary} onChange={this.handleChange}/>
                    <label>Cost</label>
                    <input type="text" name="cost" value={this.state.cost} onChange={this.handleChange}/>
                    <label>Goodie Type</label>
                    <input type="text" name="goodieType" value={this.state.goodieType} onChange={this.handleChange}/>
                    <label>Quantity</label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                </form>
                
            </div>
        )
    }
}