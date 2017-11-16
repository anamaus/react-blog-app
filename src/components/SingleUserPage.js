import React from "react";
import {BlogListingSingleUser} from "../components/BlogListingSingleUser"

export const SingleUserPage = (props) => {
  let blogs = props.posts.map((post,index) => <BlogListingSingleUser
    {...post}
    content={post.content.length < 50 ? post.content : post.content.substr(0,50) + "..."}
    key={index} 
  />)
  return (
    <div className="container">
      <h1>{props.name}'s posts.</h1>
    <hr/>
      {blogs}
    </div>
  )
}
