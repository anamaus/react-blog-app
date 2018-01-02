import React from "react";

export default class Register extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Register:</h1>
        <hr/>
        <form>
          <div className="form-group">
            <label for="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}
