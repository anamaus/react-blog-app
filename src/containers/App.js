import React from "react";
import {connect} from "react-redux";

import BlogList from "../components/Blog/BlogList"

//import actions
import { fetchPosts } from '../actions/postActions';

class App extends React.Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  render() {
    const  { blogs } = this.props;

    console.log(JSON.stringify (blogs, null, 2))

    //render list if blogs are fetched
    let blogList = null;

    if(this.props.blogsFetched) {
      blogList = <BlogList blogs={ blogs }/>
    }
    //render list ends.

      return (
          <div className="container">
            <h1>Welcome to Mis Blog</h1>
            <hr/>
            { blogList }
          </div>
      );
  }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
  return {
    blogs: state.postReducer.blogs,
    blogsFetched: state.postReducer.blogsFetched,
    // currentUser: state.userReducer.currentUser
  }
}

// //set which actions you need in this component.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name)=> {
//       dispatch(setName(name))
//     },
//   }
// };

//connect connects react with redux, connect this react component to redux store
export default connect(mapStateToProps, { fetchPosts })(App);

//if there is only 1 or 2 actions we dont need mapDispatchToProps:
// export default connect(mapStateToProps, {setName})(App);
