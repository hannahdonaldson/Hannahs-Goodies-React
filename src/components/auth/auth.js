import React, { Component } from "react";
import Login from "./login";

export default class Auth extends Component {
  
    render() {
        return (
            <div className="auth-page">
                <Login
                    // handleSuccessfulAuth={this.handleSuccessfulAuth}
                    // handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                />

            </div>
        );
    }
}