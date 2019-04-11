import React, { Component } from 'react';
import Cookie from "js-cookie"
import { NavLink } from "react-router-dom";

export default class Login extends Component {
   constructor(props) {
       super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            user_type: "user",
            signup: true,
            verificationError: false,
            errorText: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);  
        this.showLogin=this.showLogin.bind(this);  
        this.showSignup=this.showSignup.bind(this); 
        this.loginVerfication = this.loginVerfication.bind(this); 
   } 

   handleChange(event) {
       this.setState({
        [event.target.name]: event.target.value
       })
   }

   handleSubmit(event) {
       event.preventDefault()

        let name = this.state.name, password = this.state.password, email = this.state.email, user_type = this.state.user_type

        this.setState({
            verificationError: false
        })

       if(this.state.signup) {
            fetch("https://hannahs-goodies-api.herokuapp.com/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name: name, password: password, email: email, user_type: user_type})
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response == 'Data Posted') {
                    Cookie.remove("session")
                    Cookie.set("session", email)
                    this.props.history.push("/")
                    console.log(Cookie.get("session"))
                    return (
                        <NavLink exact to = "/" className = 'logout'>
                            <i className="fas fa-sign-out-alt"></i>
                        </NavLink>
                    )
                } else {
                    this.setState({
                        verificationError: true
                    })
                }
            })
            .catch(error=> {
                this.setState({
                    errorText: "Something went wrong", error
                })
            });
        } else {
                fetch("https://hannahs-goodies-api.herokuapp.com/login", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({ email: email, password: password})
                    })
                    .then(response => response.json())
                    .then(response => {
                        if (response == "User Verfied") {
                            // Cookie.remove("session")
                            Cookie.set("session", email)
                            console.log(Cookie.get("session"))
                            console.log('verified')
                            this.props.history.push('/')
                        } else {
                            console.error("NOPE!")
                            // this.setState({
                            //     // verificationError: true
                                
                            // })
                        }
                    })
                    .catch(error=> {
                        this.setState({
                            errorText: "an error ocurred in the submit function", error
                        })
                    });
                }
            }

    showLogin() {
        this.setState({
            signup: false
        })
    }

    showSignup() {
        this.setState({
            signup: true
        })
    }

    loginVerfication() {
        if ("User Verfied") {

        }
    }

   render() {
    return (

        <div className="form">
            <ul className="tab-group">
                <li className="tab active" onClick={this.showSignup} activeclassname = 'button-active'><a href="#signup">Sign Up</a></li>
                <li className="tab" onClick={this.showLogin} activeclassname = 'button-active'><a href="#login">Log In</a></li>
            </ul>

            <NavLink exact to = "/" className = 'logout' style = {{display: this.state.signup ? 'grid' : 'none'}}>
                <i className="fas fa-sign-out-alt" ></i>
            </NavLink>
      
      <div className="tab-content">
        <div id="signup" style={{display: this.state.signup ? "grid" : "none"}}>   
          <h1>Sign Up for Free</h1>

          <form onSubmit={this.handleSubmit}>
          
          <div className="top-row">
          
            <div className="field-wrap">

              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
        
          </div>

          <div className="field-wrap">
          <input 
                type="text" 
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleChange}
            />
          </div>
          
          <div className="field-wrap">
          <input 
                type="password" 
                name="password"
                placeholder="Set Password"
                value={this.state.password}
                onChange={this.handleChange}
            />
          </div>
          <p style={{display: this.state.verificationError ? "block" : "none"}}>Error Signing Up</p>
          <button type="submit" className="button button-block" onClick = {this.handleSubmit}>
            Get Started 
          </button>

          </form>
        </div>
      </div>


      <div id="login" style={{display: this.state.signup ? "none" : "grid"}}>   
         <h1>Welcome Back!</h1>
                
            <form onSubmit={this.handleSubmit}>
        
            <div className="field-wrap">

                <input 
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>
        
                <div className="field-wrap">
                    
                    <input 
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                {/* <p style={{display: this.state.verificationError ? "block" : "none"}}>Incorrect Email or Password</p> */}
                <button className="button button-block">Log In</button>
                
                </form>
            </div>
</div>
        );
    }
}