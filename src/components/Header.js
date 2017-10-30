import React from "react";

//STATELESS component, a component with no state, only props or nothing.
//stateless components dont need to extend react.component. It's just a function that returns "html element".
//Always refactor components to Stateless components if you dont need state.

export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">{ props.homeLink }</a></li>
        </ul>
      </div>
    </nav>
  )
}
