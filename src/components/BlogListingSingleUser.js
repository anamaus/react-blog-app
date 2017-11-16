import React from "react";
import {Link} from "react-router-dom";


export const BlogListingSingleUser = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{props.title}</div>
      <div className="panel-body">
        <div className="panel-content">{props.content}</div>
        <Link to={"/posts/"+props.id} className="btn btn-success">Read more</Link>
      </div>
    </div>
  );
}
