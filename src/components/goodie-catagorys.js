import React, { Component } from "react";
import axios from 'axios';

export default class GoodieButtons extends Component {
  constructor() {
    super();

    this.state = {
        isLoading: false,
        goodieType: [],
        data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.goodieType.filter(item => {
        return item.category === filter, this.state.goodieType
      })
    });
  }

  getGoodieItems() {
    axios
      .get("https://hannahs-goodies-api.herokuapp.com/goodie/catagory")
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  showGoodieItems() {
      console.log(this.state.data)
    // this.state.data.map(item => (
    //      <div key = {item[0]}>
    //             <h3>title: {data[1]}</h3>
    //             <GenreItem key={item.id} item={item} />
    //         </div>
    // )
    // )
}

getGoodieItems() {
    this.getGoodieItems();
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="goodie-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("Cake")}>
          Cake
        </button>
        <button className="btn" onClick={() => this.handleFilter("Cookie")}>
          Cookie
        </button>
        <button className="btn" onClick={() => this.handleFilter("Brownie")}>
          Brownie
        </button>
        <button className="btn" onClick={() => this.handleFilter("Cupcake")}>
          Cupcake
        </button>
        {this.showGoodieItems()}
      </div>
    );
  }
}