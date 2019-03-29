import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
        constructor(props) {
        super(props)

        this.state = {
            goodies: []
        }
    }


    componentDidMount() {
        fetch("https://hannahs-goodies-api.herokuapp.com/goodies", {
            method: 'GET',
            header: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({goodies: data});})
        .catch(err => {console.log("Fetch Error" + err);})
    }


    render() {
        return(
            <div className = 'goodies'>
                <h1>List of Goodies</h1>
                <br/>
                {this.state.goodies.map((goodies) => (
                    <div key = {goodies[0]}>
                        <h2>Title: {goodies[1]}</h2> 
                        <h3>Summary: {goodies[2]}</h3>
                        <h3>Cost: {goodies[3]}</h3>
                        <h3>Goodie Type: {goodies[4]}</h3>
                        <h3>Quantity: {goodies[5]}</h3>
                        <Link to = {`/goodie/${goodies[0]}`} > View Goodie </Link>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}