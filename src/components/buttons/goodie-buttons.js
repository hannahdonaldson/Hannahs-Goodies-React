import React, { Component } from "react";
import axios from 'axios';

export default class GoodieButtons extends Component {
  constructor() {
    super();

    this.state = {
        isLoading: false,
        goodie: [],
        data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.goodie.filter(item => {
        return item.category === filter, this.state.goodie
      })
    });
  }

  getGenreItems() {
    axios
      .get("https://hannahs-goodies-api.herokuapp.com/goodies")
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getGenreItems();
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="genre-items-wrapper">
        <button className="btn" onClick={() => this.props.handleGoodieChangeCategory("all")}>
          All
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChangeCategory("Cake")}>
          Cake
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChangeCategory("Cookie")}>
          Cookie
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChangeCategory("Brownie")}>
          Brownie
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChangeCategory("Cupcake")}>
          Cupcake
        </button>
      </div>
    );
  }
}