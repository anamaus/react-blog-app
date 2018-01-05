import React from "react";
import {connect} from 'react-redux';
import {authenticateUser} from '../actions/userActions';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        hasError: false,
    };

    onUsernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    onPasswordChangeHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    };


  onAuthenticateUserHandler = (e) => {
      e.preventDefault();
      if(this.state.username.length && this.state.password.length) {
          this.props.authenticateUser(this.state.username, this.state.password,
              () => {
                  this.props.history.push('/')
              }
          );
      } else {
          this.setState({
              hasError: true,
          })
      }
  };

    render() {
        let authFailed = null;
        if( !this.props.userExists) {
            authFailed = <div className='WarningMessage'>Username or password incorrect.</div>
        }

        let warningMessage = null;

        if (this.state.hasError) {
            warningMessage = <div className='WarningMessage'>Please fill out all the fields.</div>
        }

        return(
            <div className='Edit col-sm-4 col-sm-offset-4'>
                <h1>Login</h1>
                <hr/>
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.onUsernameChangeHandler} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" value={this.state.password} onChange={this.onPasswordChangeHandler}/>
                  </div>
                  <button type="submit" className="btn btn-success" onClick={this.onAuthenticateUserHandler}>Submit</button>
                </form>
                {warningMessage}
                {authFailed}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.currentUser,
        userExists: state.userReducer.currentUserFetched,
    }
};

export default connect(mapStateToProps, {authenticateUser})(Login)
