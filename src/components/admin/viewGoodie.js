import React, { Component } from 'react';
import DeleteAction from './deleteAction'
import EditGoodie from './editGoodie'

export default class ViewGoodie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            singleGoodie: []
        }
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

    render() {
        return(
            <div className="view-goodies">
            {console.log(this.props.match.params)}
                <div>
                <h1>Goodie Information</h1> <br/>
                    <h3>Title: {this.state.singleGoodie[1]}</h3>
                    <br/>
                    <h3>Summary: {this.state.singleGoodie[2]}</h3>
                    <br/>
                    <h3>Cost: {this.state.singleGoodie[3]}</h3>
                    <br/>
                    <h3>Goodie Type: {this.state.singleGoodie[4]}</h3>
                    <br/>
                    <h3>Quantity: {this.state.singleGoodie[5]}</h3>
                    <DeleteAction id = {this.state.singleGoodie[0]} />
                    <EditGoodie ourProp = {this.state.singleGoodie}/>
                </div>
            </div>
        )
    }
}