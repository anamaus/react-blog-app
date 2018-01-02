import React from "react";
import Blog from "./Blog"

const blogList = (props) => {
    return (
        props.posts.map((blog,index) => {
            return <Blog {...blog} isUserAuthenticated={props.userAuthenticated}  key={index} />;
        })
    )
};

export default blogList;
