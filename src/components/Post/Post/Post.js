import React from "react";
import {Link} from "react-router-dom";

import '../../../index.css';
import classes from './Post.css';


const blog = (props) => {
  // console.log(JSON.stringify (props, null, 2))

  return (

          <div className="col-sm-6">
              <div className={classes.Post}>
                    <h2 className={classes.Title}>{props.title}</h2>
                    <div className={props.isHidden ? "hidden" : ""}>by <Link to={"/users/"+props.userId} className={classes.AuthorSingle}>{props.author}</Link></div>
                  <hr/>
                    <div className={classes.Content}>{props.content.length < 150 ? props.content : props.content.substr(0,150) + "..."}</div>
                    <Link to={"/posts/"+props.id} className={classes.Button}>Read more &#9658;</Link>
                    <p className={classes.CategorySingle}>{props.category}</p>
                    {/* <div className="panel-date">{props.posts[0].date.$date}</div> */}
              </div>
          </div>

  );
};

export default blog;
