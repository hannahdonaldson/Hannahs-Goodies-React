// import React, { Component } from 'react';


// export default class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             goodie: 'Cake',
//             other: '',
//             month: '',
//             year: '',
//             day: '',
//             payment: '',
//             sc: '',
//             ccn: ''
//         };

//         this.handleChangeName = this.handleChangeName.bind(this);
//         this.handleChangeEmail = this.handleChangeEmail.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleChangeOther = this.handleChangeOther.bind(this);
//         this.handleChangeMonth = this.handleChangeMonth.bind(this);
//         this.handleChangeYear = this.handleChangeYear.bind(this);
//         this.handleChangeDay = this.handleChangeDay.bind(this);
//         this.handleChangePayment = this.handleChangePayment.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChangeDate = this.handleChangeDate.bind(this)
//         this.handleChangeCCN = this.handleChangeCCN.bind(this)
//         this.handleChangeSC = this.handleChangeSC.bind(this)
//       }

//       handleChangeDate = date => this.setState({ date })

//       handleChangeName(event) {
//         this.setState({
//             name: event.target.value
//         });
//       }

//       handleChangeEmail(event) {
//         this.setState({
//             email: event.target.value
//         });
//       }
    
//       handleChange(event) {
//         this.setState({
//             goodie: event.target.value
//         });
//       }

//       handleChangeOther(event) {
//         this.setState({
//             other: event.target.value
//         });
//       }

//       handleChangeMonth(event) {
//         this.setState({
//             month: event.target.value
//         });
//       }

//       handleChangeYear(event) {
//         this.setState({
//             year: event.target.value
//         });
//       }

//       handleChangeDay(event) {
//         this.setState({
//             day: event.target.value
//         });
//       }

//       handleChangePayment(event) {
//         this.setState({
//             payment: event.target.value
//         });
//       }

//       handleChangeCCN(event) {
//         this.setState({
//             ccn: event.target.value
//         });
//       }

//       handleChangeSC(event) {
//         this.setState({
//             sc: event.target.value
//         });
//       }
    
//       handleSubmit(event) {
//         alert(`Hello ${this.state.name}, You want your ${this.state.goodie} to have ${this.state.other}`);

//         this.setState({
//             name: '',
//             email: '',
//             goodie: 'Cake',
//             other: '',
//             month: '',
//             year: '',
//             day: '',
//             payment: '',
//             sc: '',
//             ccn: ''

//         })

//         event.preventDefault();
        
//         fetch('/api/form-submit-url', {
//             method: 'POST',
//             body: data,
//           });
//       }
    
//       render() {
//         return (
//             <div className = 'form-wrapper'>
//                 <div className = 'form'>
//                     <form onSubmit={this.handleSubmit}>
//                         <label>
                            
//                             <input 
//                                 name='name'
//                                 type="text"
//                                 placeholder = 'Name'
//                                 value = {this.state.name}
//                                 onChange = {this.handleChangeName}
//                             />

//                             <input 
//                                 name='email'
//                                 type="text"
//                                 placeholder = 'Email'
//                                 value = {this.state.email}
//                                 onChange = {this.handleChangeEmail}
//                                 required
//                             />

//                             <div className = 'goodie_type'>
//                                 <div className = 'type'>
//                                     Pick your type of goodie
//                                     <select value={this.state.goodie} onChange={this.handleChange}>
//                                         <option goodie="cake">Cake</option>
//                                         <option goodie="cupcake">Cupcake</option>
//                                         <option goodie="brownie">Brownie</option>
//                                         <option goodie="cookie">Cookie</option>
//                                         <option goodie="other">Other...</option>
//                                     </select>
//                                 </div>

//                                 <div className = 'other'>
//                                     Other
//                                     <textarea 
//                                     placeholder = 'Custom Order'
//                                     value={this.state.other} 
//                                     onChange={this.handleChangeOther} />
//                                 </div>
//                             </div>

//                             <div className = 'type'>
//                                 <div>Date of Birth</div>
//                                 <input 
//                                     name='day'
//                                     type="text"
//                                     placeholder = 'Day'
//                                     value = {this.state.day}
//                                     onChange = {this.handleChangeDay}
//                                 />

//                                 <input 
//                                     name='year'
//                                     type="text"
//                                     placeholder = 'Year'
//                                     value = {this.state.year}
//                                     onChange = {this.handleChangeYear}
//                                 />
//                                 <div>
//                                     <select value={this.state.month} onChange={this.handleChangeMonth}>
//                                         <option month="january">January</option>
//                                         <option month="febuary">Febuary</option>
//                                         <option month="march">March</option>
//                                         <option month="april">April</option>
//                                         <option month="may">May</option>
//                                         <option month="june">June</option>
//                                         <option month="july">July</option>
//                                         <option month="august">August</option>
//                                         <option month="september">September</option>
//                                         <option month="october">October</option>
//                                         <option month="november">November</option>
//                                         <option month="december">December</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <br/>

//                             <div>
//                                 <div>
//                                     Credit Card Number
//                                     <div>
//                                     <input 
//                                         name='ccn'
//                                         type="text"
//                                         placeholder = ''
//                                         value = {this.state.ccn}
//                                         onChange = {this.handleChangeCCN}
//                                         required
//                                     />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     Security Code
//                                     <div>
//                                     <input 
//                                         name='sc'
//                                         type="text"
//                                         placeholder = ''
//                                         value = {this.state.sc}
//                                         onChange = {this.handleChangeSC}
//                                     />
//                                     </div>
//                                 </div>
//                             </div>
                            

//                         </label>
//                         <input type="submit" value="Submit" />
//                     </form>
//                 </div>
//           </div>
//         );
//       }
// }

import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
			name: '',
            email: '',
            payment: '',
            sc: '',
            ccn: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.deleteSubscription = this.deleteSubscription.bind(this)
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
        this.setState({custom})
        
    }

    deleteSubscription() {
        fetch (`https://hannahs-goodies-api.herokuapp.com/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
        })
        .then(response => {
                return response.json()
        })
        .catch(error => {
                console.log("Fetch error in deleteSubscription" + error)
        })
}


    handleSubmit(event) {
        console.log(
            `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Goodie: ${this.state.goodie}
            Custom: ${this.state.other}
            Birthday: ${this.state.month}/${this.state.day}/${this.state.year}
            Payment: ${this.state.payment}
            Security Code: ${this.state.sc}
            Credit Card Number: ${this.state.ccn}`)
		event.preventDefault();
		this.setState({
			name: '',
            email: '',
            password: '',
			payment: '',
			sc: '',
			ccn: ''
		})
		
		let name = this.state.name, email = this.state.email, goodie = this.state.goodie,other = this.state.other, month = this.state.month, day = this.state.day, year = this.state.year, payment = this.state.payment, sc = this.state.sc, ccn = this.state.ccn
        fetch ("https://hannahs-goodies-api.herokuapp.com/box/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name: name, email: email, goodie: goodie, other: other, month: month, day: day, year: year, payment: payment, sc: sc, ccn: ccn})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => {console.log("Fetch Error" + err)})
	}


    render() {
        return(
			<div className = 'wrapper'>
                <h1>Login!</h1>
				<button onClick = {() => deleteSubscription}> Delete </button>
				<div className = 'form-wrapper'>
				<div className = 'form'>
                     <form onSubmit={this.handleSubmit}>
                         <label>
                            
                             <input 
                                name='name'
                                type="text"
                                placeholder = 'Name'
                                value = {this.state.name}
                                onChange = {this.handleChange}
                                required
                            />

                            <input 
                                name='email'
                                type="text"
                                placeholder = 'Email'
                                value = {this.state.email}
                                onChange = {this.handleChange}
                                
                            />

                            <input 
                                name='password'
                                type="password"
                                placeholder = 'Password'
                                value = {this.state.password}
                                onChange = {this.handleChange}
                                
                            />

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
                                    Credit Card Number
                                    <div>
                                    <input 
                                        name='ccn'
                                        type="text"
                                        placeholder = ''
                                        value = {this.state.ccn}
                                        onChange = {this.handleChange}
                                        
                                    />
                                    </div>
                                </div>

                                <div>
                                    Security Code
                                    <div>
                                    <input 
                                        name='sc'
                                        type="text"
                                        placeholder = ''
                                        value = {this.state.sc}
                                        onChange = {this.handleChange}
                                    />
                                    </div>
                                </div>
                            </div>
                            

                        </label>
                        <input type="submit" value="Submit" />
                    </form></div>
            </div>
			</div>
        )
    }
}