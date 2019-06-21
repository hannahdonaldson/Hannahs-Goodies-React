import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link} from 'react-router-dom';
import Popup from "reactjs-popup";

import GoodieButtons from '../buttons/goodie-buttons'
import SearchBar from '../search/search-bar'

const titleize = require('titleize');

export default class Home extends Component {
        constructor(props) {
        super(props)

        this.state = {
            goodies: [],
            redirect: false,
            data: [],
            catagory: "all",
            searchInfo: "all"
        }
        this.viewInfo = this.viewInfo.bind(this)
        this.handleGoodieChangeCategory = this.handleGoodieChangeCategory.bind(this)
        this.handleGoodieChangeSearch = this.handleGoodieChangeSearch.bind(this)
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

        if (this.state.searchInfo !== null) {
            this.setState({
                catagory: "all"
            })
        }

        // if (this.state.searchInfo === this.state.title) {
        //     this.setState({
        //         catagory: null
        //     })
        // }

        if (this.state.catagory === "all") {
            this.setState({
                searchInfo: null
            })
        }
    }

    viewInfo() {
        this.setState({redirect: true});
    }

    handleGoodieChangeCategory(catagory) {
        this.setState({
            catagory: catagory
        })
    }

    handleGoodieChangeSearch(searchInfo) {
        this.setState({
            searchInfo: searchInfo
        })
    }

    render() {
        return(
            <div>
                <div className = 'grid-wrapper'>
                    <div className='get-info'>
                        <div className='home-goodie-buttons'>
                            <GoodieButtons handleGoodieChangeCategory={this.handleGoodieChangeCategory} />
                        </div>
                        <div className = "search-bar-nav"> <SearchBar handleGoodieChangeSearch={this.handleGoodieChangeSearch}/> </div>
                    </div>
                    
                    <div className="goodies" >
                        {this.state.goodies.map((data) => (
                            this.state.catagory === data[4] || this.state.searchInfo === data[1] ? (<div className="goodie-data">

                                <div className = "goodie-data-title">
                                    <div className={data[1]} key = {this.state.searchInfo}>
                                        {data[1]}
                                    </div>
                                </div>
                                
                                <Link to={`/view_goodie/${data[0]}`} ><img src={data[5]} onClick = {this.viewInfo}></img></Link> 

                                <div className="goodie-data-cost">
                                    ${data[3]}
                                </div>
                                
                                </div>) : null
                        ))}

                        {this.state.goodies.map((data) => (
                            this.state.catagory === "all" || this.state.searchInfo === "all" ? (<div className="goodie-data">

                                <div className = "goodie-data-title">
                                    <div className={data[1]}>
                                        {data[1]}
                                    </div>
                                </div>

                                
                                <Link to={`/view_goodie/${data[0]}`} ><img src={data[5]} onClick = {this.viewInfo}></img></Link> 

                                <div className="goodie-data-cost">
                                    ${data[3]}
                                </div>
                                
                                </div>) : null
                        ))}
                    </div>
                    
                </div>
            </div>
        )
    }
}

