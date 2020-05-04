import React, { Component } from "react";
import "./Signup.css";
import Navbar from "../../basic/Navbar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import swal from "sweetalert";
class SignUp extends Component {
  state = {
    success: false,
    inputFields: {},
    error: {},
  };

  signupHandler = async (event) => {
    event.preventDefault();

    if (this.validateInputs()) {
      const { firstname, lastname, email, password } = this.state.inputFields;
      const user = {
        firstname,
        lastname,
        email,
        password,
      };

      await axios.post(`/signup`, { user }).then((res) => {
        if (res.data.status) {
          swal("Congratulations!!", `${res.data.message}`, "success");
          this.setState({
            success: res.data.status,
          });
        } else {
          swal("Error!!", `${res.data.message}`, "error");
          //alert(res.data.message);
        }
      });
    }
  };

  inputHandler = (event) => {
    let fields = this.state.inputFields;
    fields[event.target.name] = event.target.value;

    this.setState({
      inputFields: fields,
    });
  };

  validateInputs = () => {
    let fields = this.state.inputFields;
    let errors = {};
    let isFormValidate = true;
    if (!fields["firstname"]) {
      isFormValidate = false;
      errors["firstname"] = "*Please enter your firstname.";
    }

    if (!fields["lastname"]) {
      isFormValidate = false;
      errors["lastname"] = "*Please enter your lastname.";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        isFormValidate = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        isFormValidate = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }
    this.setState({
      error: errors,
    });
    return isFormValidate;
  };

  render() {
    if (this.state.success) {
      return <Redirect to="/sign-in"></Redirect>;
    }

    return (
      <div className="signup-wrapper">
        <Navbar />
        <div className="signup-inner w3-animate-opacity">
          <h3 className="heading-color">Sign-Up</h3>
          <hr></hr>
          <div>
            <form onSubmit={this.signupHandler} className="subscribe-form">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter here"
                      name="firstname"
                      onChange={this.inputHandler}
                      required
                    ></input>
                    <span className="text-danger">{this.state.error.firstname}</span>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter here"
                      name="lastname"
                      onChange={this.inputHandler}
                      required
                    ></input>
                     <span className="text-danger">{this.state.error.lastname}</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ex. bruce@wayne.com"
                  name="email"
                  onChange={this.inputHandler}
                  required
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={this.inputHandler}
                  required
                ></input>
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Sign-Up"
              />
            </form>
            <hr></hr>
            <p className="forgot-password text-center pb-0 pt-0">
              Already have an account?<Link to="/sign-in">Sign-in here</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
