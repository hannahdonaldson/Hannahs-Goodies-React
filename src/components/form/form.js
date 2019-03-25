import React, { Component } from 'react';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            goodie: 'Cake',
            other: '',
            month: '',
            year: '',
            day: '',
            payment: '',
            sc: '',
            ccn: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeOther = this.handleChangeOther.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleChangePayment = this.handleChangePayment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeCCN = this.handleChangeCCN.bind(this)
        this.handleChangeSC = this.handleChangeSC.bind(this)
      }

      handleChangeDate = date => this.setState({ date })

      handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
      }

      handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
      }
    
      handleChange(event) {
        this.setState({
            goodie: event.target.value
        });
      }

      handleChangeOther(event) {
        this.setState({
            other: event.target.value
        });
      }

      handleChangeMonth(event) {
        this.setState({
            month: event.target.value
        });
      }

      handleChangeYear(event) {
        this.setState({
            year: event.target.value
        });
      }

      handleChangeDay(event) {
        this.setState({
            day: event.target.value
        });
      }

      handleChangePayment(event) {
        this.setState({
            payment: event.target.value
        });
      }

      handleChangeCCN(event) {
        this.setState({
            ccn: event.target.value
        });
      }

      handleChangeSC(event) {
        this.setState({
            sc: event.target.value
        });
      }
    
      handleSubmit(event) {
        alert(`Hello ${this.state.name}, You want your ${this.state.goodie} to have ${this.state.other}`);

        this.setState({
            name: '',
            email: '',
            goodie: 'Cake',
            other: '',
            month: '',
            year: '',
            day: '',
            payment: '',
            sc: '',
            ccn: ''

        })
        event.preventDefault();
      }
    
      render() {
        return (
            <div className = 'form-wrapper'>
                <div className = 'form'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            
                            <input 
                                name='name'
                                type="text"
                                placeholder = 'Name'
                                value = {this.state.name}
                                onChange = {this.handleChangeName}
                            />

                            <input 
                                name='email'
                                type="text"
                                placeholder = 'Email'
                                value = {this.state.email}
                                onChange = {this.handleChangeEmail}
                            />

                            <div className = 'goodie_type'>
                                <div className = 'type'>
                                    Pick your type of goodie
                                    <select value={this.state.goodie} onChange={this.handleChange}>
                                        <option goodie="cake">Cake</option>
                                        <option goodie="cupcake">Cupcake</option>
                                        <option goodie="brownie">Brownie</option>
                                        <option goodie="cookie">Cookie</option>
                                        <option goodie="other">Other...</option>
                                    </select>
                                </div>

                                <div className = 'other'>
                                    Other
                                    <textarea 
                                    placeholder = 'Custom Order'
                                    value={this.state.other} 
                                    onChange={this.handleChangeOther} />
                                </div>
                            </div>

                            <div className = 'type'>
                                <div>Date of Birth</div>
                                <input 
                                    name='day'
                                    type="text"
                                    placeholder = 'Day'
                                    value = {this.state.day}
                                    onChange = {this.handleChangeDay}
                                />

                                <input 
                                    name='year'
                                    type="text"
                                    placeholder = 'Year'
                                    value = {this.state.year}
                                    onChange = {this.handleChangeYear}
                                />
                                <div>
                                    <select value={this.state.month} onChange={this.handleChangeMonth}>
                                        <option month="january">January</option>
                                        <option month="febuary">Febuary</option>
                                        <option month="march">March</option>
                                        <option month="april">April</option>
                                        <option month="may">May</option>
                                        <option month="june">June</option>
                                        <option month="july">July</option>
                                        <option month="august">August</option>
                                        <option month="september">September</option>
                                        <option month="october">October</option>
                                        <option month="november">November</option>
                                        <option month="december">December</option>
                                    </select>
                                </div>
                            </div>

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
                                        onChange = {this.handleChangeCCN}
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
                                        onChange = {this.handleChangeSC}
                                    />
                                    </div>
                                </div>
                            </div>
                            

                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
          </div>
        );
      }
}