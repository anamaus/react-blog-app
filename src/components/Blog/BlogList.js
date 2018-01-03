import React from "react";
import Blog from "./Blog"

const blogList = (props) => {
    return (
        props.posts.map((blog,index) => {
            return <Blog {...blog} isHidden={props.isHidden}  key={index} />;
        })
    )
};

export default blogList;
