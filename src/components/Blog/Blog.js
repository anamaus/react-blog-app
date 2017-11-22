import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const blog = (props) => {
  // console.log(JSON.stringify (props, null, 2))
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{props.title}</div>
      <div className="panel-body">
        <div className="panel-content">{props.content}</div>
        <Link to={"/posts/"+props.id} className="btn btn-success" onClick={this.onGetPost}>Read more</Link>
        {/* <div className="panel-date">{props.posts[0].date.$date}</div> */}
        <div className="panel-author">by <Link to={"/users/"+props.id}>{props.author}</Link></div>
      </div>
    </div>
  );
}

export default blog;
