import React, { Component } from 'react';


export default class SearchRender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            goodies: [],
            title: ''
        }
    }

    getInfo() {
        fetch(`https://hannahs-goodies-api.herokuapp.com/search/${this.state.title}`, {
            method: 'GET',
            header: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then((data) => {
            console.log(data);
            
            this.setState({
                goodies: data
            })
            
          })
        .catch(err => {console.log("Fetch Error" + err);})
      }

      handleInputChange = () => {
        this.setState({
          title: this.search.value
        })
      }

    render() {
        return(
            <div>
                <h1>Search Render Info</h1>
            </div>
        )
    }
}