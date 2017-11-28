import React from "react";
import Blog from "./Blog"

const blogList = (props) => {

  return (
    props.blogs.map((blog,index) => {
      return <Blog {...blog} getBlog={props.getBlog} key={index} />;
    })
  )
};

export default blogList;
