import React from "react";

export class User extends React.Component {
onNavigateHome(){
  this.props.history.push("/home");
}


  render() {
    return(
      <div>
        <h3>User</h3>
        <p> User id: {this.props.match.params.idName}</p>
        <hr/>
        <button className="btn btn-success" onClick={this.onNavigateHome.bind(this)}>Go home!</button>
      </div>
    )
  }
}
