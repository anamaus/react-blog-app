import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import BlogList from "../../components/Blog/BlogList";

//import actions
import { fetchPosts } from '../../actions/postActions';

class Layout extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        // console.log('from Layout.js', JSON.stringify (this.props.blogs, null, 2));

        const  { posts } = this.props;

        //render list if blogs are fetched
        let blogList = null;

        if(this.props.postsFetched) {
            blogList = <BlogList posts={ posts }/>
        }
        //render list ends.

        return (
            <div className='container'>
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
        posts: state.postReducer.posts,
        postsFetched: state.postReducer.postsFetched,
    }
};

// //set which actions you need in this component.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name)=> {
//       dispatch(setName(name))
//     },
//   }
// };

//connect connects react with redux, connect this react component to redux store
export default withRouter(connect(mapStateToProps, { fetchPosts })(Layout));

//if there is only 1 or 2 actions we dont need mapDispatchToProps:
// export default connect(mapStateToProps, {setName})(Layout);