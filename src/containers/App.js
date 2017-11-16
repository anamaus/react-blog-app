import React from "react";
import {connect} from "react-redux";

import BlogListing from "../components/BlogListing"

//import actions
import { fetchPosts } from '../actions/postActions';


class App extends React.Component {

  // constructor(props){
  //   super();
  // }

  componentWillMount(){
    this.props.fetchPosts();
  }

    render() {
      const  { posts } = this.props;
      let blogListing = null;

      if(this.props.postsFetched) {
        blogListing = posts.map((post,index) => <BlogListing {...post} key={index} />)
      }

        return (
            <div className="container">
              <h1>Welcome to Mis Blog</h1>
              <hr/>
              { blogListing }
            </div>
        );
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.posts,
    postsFetched: state.postReducer.postsFetched,
    currentUser: state.userReducer.currentUser
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
