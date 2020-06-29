import React, { Component } from "react";
import withSubmit from "../hoc/withSubmit";
import withToggle from "../hoc/withToggle";

class RegisterForm extends Component {
  state = {
    login: "",
    email: "",
    password: ""
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { login, email, password } = this.state;
    const {isOn:isToggled, handleChange: handleToggled, submit} = this.props
    return (
      <form onSubmit={submit(this.state)} className="col-md-3" autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Login</label>
          <input
            name="login"
            value={login}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>

        <div className="form-check">
          <input
            checked={isToggled}
            onChange={handleToggled}
            type="checkbox"
            name="isAgree"
            id="isAgree"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="isAgree">
            I Agree
          </label>
        </div>

        {isToggled && (
          <div className="form-group">
            <button className="btn btn-success">Register</button>
          </div>
        )}
      </form>
    );
  }
}

export default withSubmit(withToggle(RegisterForm));
