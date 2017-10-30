import React from "react";
//dumb component, stateless
//just a function that recieves props as argument and returns "html" element
//no need to be react class component
export const UserRedux = (props) => {
  return (
      <div>
          <div className="row">
              <div className="col-xs-12">
                  <h1>The User Page</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12">
                  <p>User Name: {props.username}</p>
              </div>
          </div>
      </div>
  );
}
