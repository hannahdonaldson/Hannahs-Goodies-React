import React, { Component } from 'react';

export default class AddCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            summary: '',
            cost: '',
            goodieType: '',
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
        
        let title = this.state.title, summary = this.state.summary, cost = this.state.cost, goodieType = this.state.goodieType, goodie_url = this.state.goodie_url
        fetch ("https://hannahs-goodies-api.herokuapp.com/goodie/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({title: title, summary: summary, cost: cost, goodieType: goodieType, goodie_url: goodie_url})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => {console.log("Data Posted")})
        .catch(err => {console.log("Fetch Error " + err)})
    }


    render() {
        return(
            <div className = 'books'>
                <h1>Add to Cart</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <label>Summary</label>
                    <input type="text" name="summary" value={this.state.summary} onChange={this.handleChange}/>
                    <label>Cost</label>
                    <input type="text" name="cost" value={this.state.cost} onChange={this.handleChange}/>
                    <label>Goodie Type</label>
                    <input type="text" name="goodieType" value={this.state.goodieType} onChange={this.handleChange}/>
                    <label>Goodie Url</label>
                    <input type="text" name="goodie_url" value={this.state.goodie_url} onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}