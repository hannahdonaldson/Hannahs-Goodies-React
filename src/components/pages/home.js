import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Popup from "reactjs-popup";
import GoodieButtons from '../buttons/goodie-catagorys'

export default class Home extends Component {
        constructor(props) {
        super(props)

        this.state = {
            goodies: [],
            redirect: false
        }
        this.viewInfo = this.viewInfo.bind(this)
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
        this.viewInfo = this.viewInfo.bind(this)
        this.advertisment = this.advertisment.bind(this)
    }

    viewInfo() {
        this.setState({redirect: true});
    }

    advertisment() {
        return <Redirect push to={`/view_goodie/2`} />
    }

    render() {
        if (this.state.redirect) {
        return this.state.goodies.map((data) => (
            <Redirect push to={`/view_goodie/${data[0]}`} />
        ))
    }
        return(
            <div>
                <div><GoodieButtons /></div>
                <div className="goodies">
                    {this.state.goodies.map((data) => (
                        <div className="goodie-data" key = 'home-page-grid-data'>
                            <div className="goodie-data-title" key = 'home-page-grid-title'>
                                {data[1]}
                            </div>

                            
                            <img src={data[5]} onClick = {this.viewInfo}></img>
                        </div>
                    ))}
                    

                    <div classname="buy-goodie">
                        <Popup onClick={this.advertisment} trigger={<button> Buy! </button>} position="top center">
                            <Redirect push to={`/view_goodie/2`} />
                        </Popup>
                    </div>
                </div>
            </div>
        )
    }
}
