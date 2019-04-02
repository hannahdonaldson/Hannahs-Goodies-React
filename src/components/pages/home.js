import React, { Component } from 'react';

export default class Home extends Component {
        constructor(props) {
        super(props)

        this.state = {
            goodies: []
        }
    }

    componentDidMount() {
        fetch ("https://hannahs-goodies-api.herokuapp.com/goodies", {
            method: "GET",
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({goodies: data});})
        .catch(error => {
            console.log("Fetch error" + error)
        })
    }

    render() {
        return(
            <div className="goodies">
                {this.state.goodies.map((data) => (
                    <div className="goodie-data">
                        <div className="goodie-data-title">
                            {data[1]}
                        </div>
                        {/* <div key = {goodies[0]}>
                            <h2>Title: {goodies[1]}</h2> 
                            <h3>Summary: {goodies[2]}</h3>
                            <h3>Cost: {goodies[3]}</h3>
                            <h3>Goodie Type: {goodies[4]}</h3>
                            <h3>Image: {goodies[5]}</h3>
                            <Link to = {`/goodie/${goodies[0]}`} > View Goodie </Link>
                            <hr/>
                        </div> */}
                        
                        <img src={data[5]}></img>
                    </div>
                ))}
            </div>
        )
    }
}

   