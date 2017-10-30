import React from "react";
//dumb component, stateless
//just a function that recieves props as argument and returns "html" element
//no need to be react class component
export const MainRedux = (props) => {
  return (
      <div>
          <div className="row">
              <div className="col-xs-12">
                  <h1>The Main Page</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12">
                  <button
                      className="btn btn-primary"
                      onClick={() => props.changeUsername('Anna')}>Change the Username</button>
              </div>
          </div>
      </div>
  );
}
