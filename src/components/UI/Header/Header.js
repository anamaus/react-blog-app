import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {signOutHandler} from "../../../actions/userActions";
import Wrapper from '../../../hoc/Wrapper';
import {withRouter} from "react-router-dom";

import './Header.css';

//STATELESS component, a component with no state, only props or nothing.
//stateless components dont need to extend react.component. It's just a function that returns "html element".
//Always refactor components to Stateless components if you dont need state.

class Header extends React.Component{

    onSignOutUserHandler = () => {


        this.props.signOutHandler();
        // this.props.history.push("/");
    };

    render(){
        let navigation = null;

        if(this.props.authUser) {
            navigation =
                <Wrapper>
                    <li><NavLink to={"/users/" + this.props.authUser.id} >{this.props.authUser.name}</NavLink></li>
                    <li><a onClick={this.onSignOutUserHandler}>Sign out</a></li>
                </Wrapper>

        } else {
            navigation =
                <Wrapper>
                    <li><NavLink to={"/login"} >Log in</NavLink></li>
                    <li><NavLink to={"/register"} >Register</NavLink></li>
                </Wrapper>
        }

        return (
            <nav className="navbar navbar-default navbar-inverse">
                <div className="container">
                    <ul className="nav navbar-nav navbar-right ">
                        <li><NavLink to={"/"} exact  >Home</NavLink></li>
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

export default withRouter(connect(mapStateToProps, {signOutHandler})(Header));
