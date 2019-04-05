import React from 'react';

export default class CheckoutPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            payment: '',
            ccn: '',
            phone: '',
            street: '',
            city: '',
            state: '',
            country: '',
            ZIPCode: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        }

    

    componentDidMount() {
        const { id } = this.props.match.params

        fetch(`https://hannahs-goodies-api.herokuapp.com/goodie/${id}`, {
            method: 'GET',
            header: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .then(data => {this.setState({singleBook: data})})
        .catch(err => {console.log("Fetch Error " + err)})
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        this.setState({month: e.target.value})
        
    }


    handleSubmit(event) {
        console.log(
            `Street: ${this.state.street}
            City: ${this.state.city}
            State: ${this.state.state}
            Country: ${this.state.country}
            ZIPCode: ${this.state.ZIPCode}
            Payment: ${this.state.payment}
            Security Code: ${this.state.sc}
            Credit Card Number: ${this.state.ccn}`)
		event.preventDefault();
		this.setState({

			payment: '',
			sc: '',
			ccn: ''
		})
		
		let payment = this.state.payment, sc = this.state.sc, ccn = this.state.ccn, street = this.state.street, city = this.state.city, state = this.state.state, country = this.state.country, ZIPCode = this.state.ZIPCode;
        fetch ("https://hannahs-goodies-api.herokuapp.com/cart/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({payment: payment, sc: sc, ccn: ccn, street: street, city: city, state: state, country: country, ZIPCode: ZIPCode})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => {console.log("Fetch Error" + err)})
	}


    render() {
        return(
			<div className = 'wrapper'>
                <h1>Order</h1>
				<div className = 'form-wrapper'>
				<div className = 'my-form'>
                     <form onSubmit={this.handleSubmit}>
                         <label>

                            <input 
                                name='phone'
                                type="text"
                                placeholder = 'Phone Number'
                                value = {this.state.phone}
                                onChange = {this.handleChange}
                                
                            />

                            <br/>

                            <div>
                                <div>
                                    
                                    <div>
                                    <input 
                                        name='ccn'
                                        type="text"
                                        placeholder = 'Credit Card Number'
                                        value = {this.state.ccn}
                                        onChange = {this.handleChange}
                                        
                                    />
                                    </div>
                                </div>

                                <div>

                                <div>
                                    <input 
                                        name='sc'
                                        type="text"
                                        placeholder = 'Security Code'
                                        value = {this.state.sc}
                                        onChange = {this.handleChange}
                                    />
                                    </div>

                                    <div>
                                    <input 
                                        name='street'
                                        type="text"
                                        placeholder = 'Street'
                                        value = {this.state.street}
                                        onChange = {this.handleChange}
                                    />
                                    </div>
                                    
                                    <div>
                                    <input 
                                        name='city'
                                        type="text"
                                        placeholder = 'City'
                                        value = {this.state.city}
                                        onChange = {this.handleChange}
                                    />
                                    </div>

                                    <div>
                                    <input 
                                        name='state'
                                        type="text"
                                        placeholder = 'State'
                                        value = {this.state.state}
                                        onChange = {this.handleChange}
                                    />
                                    </div>


                                    <div>
                                    <input 
                                        name='country'
                                        type="text"
                                        placeholder = 'Country'
                                        value = {this.state.country}
                                        onChange = {this.handleChange}
                                    />
                                    </div>

                                    <div>
                                    <input 
                                        name='ZIPCode'
                                        type="text"
                                        placeholder = 'ZIP Code'
                                        value = {this.state.ZIPCode}
                                        onChange = {this.handleChange}
                                    />
                                    </div>
                                </div>
                            </div>
                            

                        </label>
                        <input type="submit" value="Checkout" />
                    </form></div>
            </div>
			</div>
        )
    }
}












// import React, { Component } from 'react';

// import Cake from "../../../static/assets/images/cake.jpeg";

// export default class CheckoutPage extends Component {
//   constructor(props) {
//     super(props)
//   }


//  Item(props) {
//      return (
//     <div className="item-container">
//       <div className="item-image">
//         <img src={props.img}/>
//         <div className="item-details">
//           <h3 className="item-name"> {props.name} </h3>
//           <h2 className="item-price"> {props.price} </h2>
//         </div>
//       </div>
//     </div>
//      )};
  
//    Checkout()  {
//        return (
//    <div className="checkout">
//       <div className="checkout-container">
//        <h3 className="heading-3">Checkout</h3>
//        <Input label="Full Name" type="text" name="full_name" />
//        <Input label="Email" type="text" name="email" />
//        <Input label="Address" type="text" name="address" />
//         <div className="row">
//           <div className="col">
//             <Input label="City" type="text" name="city" />
//           </div>
//           <div className="col">
//             <Input label="State" type="text" name="state" />
//           </div>
//           <div className="col">
//             <Input label="Postal Code" type="text" name="postal_code" />
//           </div>
//         </div>
//        <br/>
//        <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
//         <div className="row">
//           <div className="col">
//             <Input label="Expiration Date" type="month" name="exp_date" />
//           </div>
//           <div className="col">
//             <Input label="CVV" type="number" name="cvv" />
//           </div>
//         </div>
//         <Button text="Place order" />
//       </div>
//    </div>
//        )};
  
//    Input(props) {
//        return (
//     <div className="input">
//       <label>{props.label}</label>
//       <div className="input-field">
//         <input type={props.type} name={props.name} />
//         <img src={props.imgSrc}/>
//       </div>
//     </div>
//        )};
  
//    Button(props) {
//     <button className="checkout-btn" type="button">{props.text}</button>
//    };
  

//   render(){
//     return (
//       <div className="app-container">
//         <div className="row">
//           <div className="col">
//             <Item img={Cake} />
//           </div>
//           <div className="col no-gutters">
//             <Checkout />
//           </div>
//         </div>
//        </div>
//     )
//   }
// }
