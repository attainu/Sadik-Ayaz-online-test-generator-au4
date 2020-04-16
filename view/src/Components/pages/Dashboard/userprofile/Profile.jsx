import React, { Component } from "react";
import axios from "axios";
import app from "../../../../appsBasic";
import "./Profile.css";
class Profile extends Component {
  state = {
    disabled: true,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/user/read/${app.getUserId()}`)
      .then((response) => {
        let { firstname, lastname, email, password } = response.data;
        this.setState({
          firstname,
          lastname,
          email,
          password,
        });
      })
      .catch((error) => console.log(error));
  }

  editHandler = (event) => {
    event.preventDefault();
    this.setState({
      disabled: false,
    });
  };

  updateProfileHandler = (event) => {
    event.preventDefault();
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .put(`http://localhost:5000/user/update/${app.getUserId()}`, { user })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h1 className="profile-heading">user profile details</h1>
        <form onSubmit={this.updateProfileHandler}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={this.state.firstname}
              className="form-control"
              onChange={(event) =>
                this.setState({ firstname: event.target.value })
              }
              disabled={this.state.disabled ? "disabled" : ""}
            ></input>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={this.state.lastname}
              className="form-control"
              onChange={(event) =>
                this.setState({ lastname: event.target.value })
              }
              disabled={this.state.disabled ? "disabled" : ""}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              className="form-control"
              onChange={(event) => this.setState({ email: event.target.value })}
              disabled={this.state.disabled ? "disabled" : ""}
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              value={this.state.password}
              className="form-control"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
              disabled={this.state.disabled ? "disabled" : ""}
            ></input>
          </div>
          <div>
            <button className="btn btn-primary" onClick={this.editHandler}>
              Edit
            </button>
            <input
              type="submit"
              className="btn btn-primary ml-3"
              value="Save"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
