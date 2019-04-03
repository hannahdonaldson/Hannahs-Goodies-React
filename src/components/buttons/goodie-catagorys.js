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

  getGoodieItems() {
    axios
      .get(`https://hannahs-goodies-api.herokuapp.com/goodies`)
      .then(response => {
        this.setState({
          data: response.goodieType
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.goodieType.filter(item => {
        item.category === filter, this.state.goodieType
      })
    });
  }

  // getGoodieItems() {
  //   axios
  //     .get(`https://hannahs-goodies-api.herokuapp.com/goodie/${this.state.goodieType}`)
  //     .then(response => {
  //       this.setState({
  //         data: response
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  showGoodieItems() {
      console.log(this.state.data)
}

  componentDidMount() {
    this.showGoodieItems();
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="goodie-items-wrapper">

        <div>
            {this.showGoodieItems()}
        </div>


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


        
      </div>
    );
  }
}