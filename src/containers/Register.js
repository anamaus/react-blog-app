import React from "react";
import {connect} from 'react-redux';
import {registerUser} from "../actions/userActions";

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        name: '',
        hasError: false,
    };

    onUsernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    onNameChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    onPasswordChangeHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    };


    onSubmitHandler = (e) => {
        e.preventDefault();
        if(this.state.username.length && this.state.password.length) {
           this.props.registerUser(this.state.username, this.state.name, this.state.password,
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
        return (
            <div className='Edit col-sm-4 col-sm-offset-4'>
                <h1>Register:</h1>
                <hr/>
                <form onSubmit={this.onSubmitHandler}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.onUsernameChangeHandler} />
                  </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChangeHandler} />
                    </div>

                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" value={this.state.password} onChange={this.onPasswordChangeHandler}/>
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {registerUser})(Register)
