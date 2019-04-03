import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            payment: '',
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
            Payment: ${this.state.payment}
            Security Code: ${this.state.sc}
            Credit Card Number: ${this.state.ccn}`)
		event.preventDefault();
		this.setState({

			payment: '',
			sc: '',
			ccn: ''
		})
		
		let name = payment = this.state.payment, sc = this.state.sc, ccn = this.state.ccn
        fetch ("https://hannahs-goodies-api.herokuapp.com/box/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({payment: payment, sc: sc, ccn: ccn})
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
				<button onClick = {() => deleteSubscription}> Delete </button>
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