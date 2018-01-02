import React from "react";
import {connect} from 'react-redux';
import {authenticateUser} from '../actions/userActions';

class Login extends React.Component {

  onAuthenticateUserHandler = (event) => {
      event.preventDefault();
      this.props.authenticateUser('4adffc1f0c118814', 'ana');
      this.props.history.push("/");
  };

  render() {
    return(
      <div className="container">
        <h1>Login</h1>
        <hr/>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <button type="submit" className="btn btn-success" onClick={this.onAuthenticateUserHandler}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.currentUser,
    }
};

export default connect(mapStateToProps, {authenticateUser})(Login)
