import React from "react";
import {NavLink} from "react-router-dom";

//STATELESS component, a component with no state, only props or nothing.
//stateless components dont need to extend react.component. It's just a function that returns "html element".
//Always refactor components to Stateless components if you dont need state.

export const HeaderRouter = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <ul className="nav navbar-nav">
          <li><NavLink to={"/home"} activeStyle={{color:'violet'}}>Home</NavLink></li>
          <li><NavLink to={"/user:10"} activeStyle={{color:'violet'}}>User</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
