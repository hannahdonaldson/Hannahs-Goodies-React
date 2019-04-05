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

  getGenreItems() {
      console.log(this.state.data)
    // this.state.data.map(item => (
    //      <div key = {item[0]}>
    //             <h3>title: {data[1]}</h3>
    //             <GenreItem key={item.id} item={item} />
    //         </div>
    // )
    // )
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
        <button className="btn" onClick={() => this.props.handleGoodieChange("all")}>
          All
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChange("Cake")}>
          Cake
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChange("Cookie")}>
          Cookie
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChange("Brownie")}>
          Brownie
        </button>
        <button className="btn" onClick={() => this.props.handleGoodieChange("Cupcake")}>
          Cupcake
        </button>
      </div>
    );
  }
}