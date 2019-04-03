import React, { Component } from 'react';
import Cookie from "js-cookie"

export default class Login extends Component {
   constructor(props) {
       super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            signup: true,
            verificationError: false
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);  
        this.showLogin=this.showLogin.bind(this);  
        this.showSignup=this.showSignup.bind(this);  
   } 

   handleChange(event) {
       this.setState({
        [event.target.name]: event.target.value
       })
   }

   handleSubmit() {
       if(this.state.signup) {
            fetch("https://hannahs-goodies-api.herokuapp.com/user/input", {
                methods: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.strigify({
                    name: this.state.name,
                    password: this.state.password,
                    email: this.state.email,
                    user_type: "user"
                })
            })
            .then(response => {
                if (response === 'User Posted') {
                    Cookie.remove("session")
                    Cookie.set("session", this.state.email)
                    this.props.history.push("/")
                } else {
                    this.setState({
                        verificationError: true
                    })
                }
            })
            .catch(error=> {
                this.setState({
                    errorText: "an error done happened dude"
                })
            });
        } else {     
            fetch("https://hannahs-goodies-api.herokuapp.com/user/verification", {
                methods: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.strigify({
                    password: this.state.password,
                    email: this.state.email
                })
            })
            .then(response => {
                if (response === 'User Verified') {
                    Cookie.remove("session")
                    Cookie.set("session", this.state.email)
                    this.props.history.push("/")
                } else {
                    this.setState({
                        verificationError: true
                    })
                }
            })
            .catch(error=> {
                this.setState({
                    errorText: "an error done happened dude"
                })
            });
        }
        event.preventDefault();
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

   render() {
    return (

        <div className="form">
            <ul className="tab-group">
                <li className="tab active" onClick={this.showSignup} activeclassname = 'button-active'><a href="#signup">Sign Up</a></li>
                <li className="tab" onClick={this.showLogin} activeclassname = 'button-active'><a href="#login">Log In</a></li>
            </ul>
      
      <div className="tab-content">
        <div id="signup" style={{display: this.state.signup ? "grid" : "none"}}>   
          <h1>Sign Up for Free</h1>

          <div> 
            {this.state.errorText}
          </div>

          <form onSubmit={this.handleSubmit}>
          
          {/* <form action="/" method="post"> */}
          
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
          <button type="submit" className="button button-block">
            Get Started 
          </button>

          </form>
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
            <p style={{display: this.state.verificationError ? "block" : "none"}}>Incorrect Email or Password</p>          
            <button className="button button-block">Log In</button>
          
          </form>
        </div>
      </div>
      
</div>
        );
    }
}

// $('.tab a').on('click', function (e) {
  
//     e.preventDefault();
    
//     $(this).parent().addClass('active');
//     $(this).parent().siblings().removeClass('active');
    
//     target = $(this).attr('href');
  
//     $('.tab-content > div').not(target).hide();
    
//     $(target).fadeIn(600);
    
//   });