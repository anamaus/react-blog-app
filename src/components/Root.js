import React from "react";

import {HeaderRouter} from "./HeaderRouter"


export class Root extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
            <HeaderRouter />
        </div>
        <div className="row">
          <div className="col-xs-12">
            // {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
