import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link} from 'react-router-dom';
import Popup from "reactjs-popup";

import GoodieButtons from '../buttons/goodie-buttons'

export default class Home extends Component {
        constructor(props) {
        super(props)

        this.state = {
            goodies: [],
            redirect: false,
            data: [],
            catagory: "all"
        }
        this.viewInfo = this.viewInfo.bind(this)
        this.handleGoodieChange = this.handleGoodieChange.bind(this)
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

    viewInfo() {
        this.setState({redirect: true});
    }

    handleGoodieChange(catagory) {
        this.setState({
            catagory: catagory
        })
    }

    render() {
        return(
            <div>


                <div className = 'grid-wrapper'>
                    <div className='home-bottom'>
                        <div className='home-goodie-buttons'>
                            <GoodieButtons handleGoodieChange={this.handleGoodieChange} />
                        </div>
                    </div>
                    <div className="goodies">
                        {this.state.goodies.map((data) => (
                            this.state.catagory === "all" || this.state.catagory === data[4] ? (<div className="goodie-data">
                                <div className="goodie-data-title">
                                    {data[1]}
                                </div>
                                
                                <Link to={`/view_goodie/${data[0]}`} ><img src={data[5]} onClick = {this.viewInfo}></img></Link> 
                                {console.log(this.state.data)}
                                
                                </div>) : null
                        ))}
                    </div>
                </div>
                    <div className="buy-goodie">
                        <Popup trigger={<button> Buy New Spring Special Blueberry Cupcakes! </button>} position="top center">
                            <Redirect push to={`/view_goodie/2`} />
                        </Popup>
                    </div>
            </div>
        )
    }
}

