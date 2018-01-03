import React from "react";
import {Link} from "react-router-dom";

import './Blog.css';

const blog = (props) => {
  // console.log(JSON.stringify (props, null, 2))

  return (
      <div className="panel panel-default">
          <div className="panel-heading">{props.title}</div>
          <div className="panel-body">
              <div className="panel-content">{props.content.length < 50 ? props.content : props.content.substr(0,50) + "..."}</div>
              <Link to={"/posts/"+props.id} className="btn btn-success">Read more</Link>
              {/* <div className="panel-date">{props.posts[0].date.$date}</div> */}
              <div className={props.isHidden ? "hidden" : "panel-author"}>by <Link to={"/users/"+props.userId}>{props.author}</Link></div>
          </div>
      </div>
  );
};

export default blog;
