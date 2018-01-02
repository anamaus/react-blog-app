import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {removeCurrentUser} from "../actions/userActions";
import Wrapper from '../hoc/Wrapper';

//STATELESS component, a component with no state, only props or nothing.
//stateless components dont need to extend react.component. It's just a function that returns "html element".
//Always refactor components to Stateless components if you dont need state.

class Header extends React.Component{

    onSignOutUserHandler = (e) => {
        this.props.removeCurrentUser();
        this.props.history.push("/");
    };

    render(){
        let navigation = null;

        if(this.props.authUser) {
            navigation =
                <Wrapper>
                    <li><NavLink to={"/users/" + this.props.authUser.id} activeStyle={{color:'violet'}}>{this.props.authUser.name}</NavLink></li>
                    <li><NavLink to={"/"} activeStyle={{color:'violet'}} onClick={this.onSignOutUserHandler}>Sign out</NavLink></li>
                </Wrapper>

        } else {
            navigation =
                <Wrapper>
                    <li><NavLink to={"/login"} activeStyle={{color:'violet'}}>Log in</NavLink></li>
                    <li><NavLink to={"/register"} activeStyle={{color:'violet'}}>Register</NavLink></li>
                </Wrapper>
        }

        return (
            <nav className="navbar navbar-default navLink">
                <div className="container">
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to={"/"} activeStyle={{color:'violet'}} >Home</NavLink></li>
                        {navigation}
                    </ul>
                </div>
            </nav>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.currentUser,
    }
};

export default connect(mapStateToProps, {removeCurrentUser})(Header);
