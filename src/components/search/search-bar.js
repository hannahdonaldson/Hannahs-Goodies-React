// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'

// import SearchRender from './search-render'

// class SearchBar extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: '',
//             goodies: [],
//             redirect: false
//         }
//         this.getInfo = this.getInfo.bind(this)
//         this.handleInputChange = this.handleInputChange.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
// 		this.handleFilter = this.handleFilter.bind(this);
// 		this.style = this.style.bind(this);
    
//       }
    
//       handleFilter(filter) {
//         this.setState({
// 			goodies: this.state.goodies.filter(item => {
//             return item.title === filter;
//           })
//         });
//       }

//  getInfo() {
//     fetch(`https://hannahs-goodies-api.herokuapp.com/search/${this.state.title}`, {
//         method: 'GET',
//         header: {
//             "accepts": "application/json",
//             "Content-Type": "application/json"
//         }
//     })
//     .then(response => {return response.json();})
//     .then((data) => {
//         console.log(data);
        
//         this.setState({
//             goodies: data
//         })
        
//       })
//     .catch(err => {console.log("Fetch Error" + err);})
//   }
  
//   handleInputChange = () => {
//     this.setState({
//       title: this.search.value
//     })
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     this.getInfo()
//   }

//   style() {
//     return this.state.goodies.map(goodie => {
//       return <h1>{goodie}</h1>
//     })
//   }

//   setRedirect = () => {
//     this.setState({
//       redirect: true
//     })
//   }
  
//   renderRedirect = () => {
//     if (this.state.redirect) {
//       return <Redirect to='/search-render' />
//     }
//   }

//   render() {
//     return (
//     <div className = 'search-bar-wrapper'>
//         <form onSubmit={this.onSubmit}>
        
//         <div className = 'search'>
//           <input
//             placeholder="Search for..."
//             className="search-bar-input"
//             ref={input => this.search = input}
//             onChange={this.handleInputChange}
//           />
//           <button className="submit" type='submit' value="submit" onChange={this.onSubmit}>Submit</button>
//         </div>
//         <div className="render" >
//             { this.state.goodies !== null ? this.style() /* <SearchRender /> */: "Your search wasn't found!" }
//         </div>
//       </form>


//       <div>
//         {this.renderRedirect()}
//         <button onClick={this.setRedirect}>Redirect</button>
//        </div>



//     </div>
//     )
//   }
// }
// export default SearchBar







import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            goodies: [],
			data: []

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleFilter = this.handleFilter.bind(this);
    }
  
    handleFilter(filter) {
      this.setState({
        data: this.state.goodie.filter(item => {
          return item.category === filter, this.state.goodie
        })
      });
    }
  
    getGoodieItems() {
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
  
    getGoodieItems() {
        console.log(this.state.data)
  }
  
    componentDidMount() {
      this.getGoodieItems();
    }
  
  handleInputChange = () => {
    this.setState({
	  title: this.search.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
	//   if ("search-bar-input" === null) {
	// 	  this.setState({
	// 		handleGoodieChangeSearch: "all"
	// 	  })
	//   }
    return (
    <div className = 'search-bar-wrapper'>
        <form onSubmit={this.onSubmit}>
        
        <div className = 'search'>
          <input
            placeholder="Search for..."
            className="search-bar-input"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <button className="submit" type='submit' value="submit"  onChange={this.onSubmit} onClick={() => this.props.handleGoodieChangeSearch(`${this.state.title}`)} >Submit</button>
        </div>
      </form>
    </div>
    )
  }
}
export default SearchBar