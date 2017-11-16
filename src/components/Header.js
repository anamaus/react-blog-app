import React from "react";
import {NavLink} from "react-router-dom";

//STATELESS component, a component with no state, only props or nothing.
//stateless components dont need to extend react.component. It's just a function that returns "html element".
//Always refactor components to Stateless components if you dont need state.

export const Header = (props) => {
  return (
    <nav className="navbar navbar-default navLink">
      <div className="container">
        <ul className="nav navbar-nav">
          <li><NavLink to={"/"} activeStyle={{color:'violet'}} >Home</NavLink></li>
          <li><NavLink to={"/login"} activeStyle={{color:'violet'}}>Log in</NavLink></li>
          <li><NavLink to={"/register"} activeStyle={{color:'violet'}}>Register</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
