import React from "react";
import {connect} from "react-redux";


class SingleBlogPost extends React.Component {
  // constructor(props){
  //   super();
  //   const currentPost= null;
  // }

  componentWillMount(){}

  render() {
    //   this.currentPost = this.props.currentUserPosts.filter((post) => {
    //   if(post.id == this.props.match.params.id) {
    //     return post;
    //   }
    // })

    return (
      <h1>{this.props.post.name}</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.post
  }
}
//
export default connect(mapStateToProps)(SingleBlogPost);
