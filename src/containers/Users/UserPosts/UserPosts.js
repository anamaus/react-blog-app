import React from 'react';
import {connect} from 'react-redux';
import {fetchAllPostsFromUser} from "../../../actions/postActions";
import BlogList from "../../../components/Blog/BlogList";
import Wrapper from '../../../hoc/Wrapper';

import './UserPosts.css';

class UserPosts extends React.Component {
    componentDidMount() {
        this.props.fetchAllPostsFromUser(this.props.match.params.userId)
    }
    render() {
        console.log('posts',this.props.allPosts);

        let allPosts=null;
        let heading = null;

        if (this.props.fetched) {
            if(this.props.authUser ) {
                allPosts = <BlogList posts={ this.props.allPosts } userAuthenticated={this.props.authUser.id === this.props.allPosts[0].userId}/>;
            } else {
                allPosts = <BlogList posts={ this.props.allPosts }/>;
            }
            heading = <h1>{this.props.allPosts[0].author}'s posts</h1>
        }

        if (this.props.fetched && this.props.authUser &&  this.props.authUser.id === this.props.allPosts[0].userId) {
            heading =
                <Wrapper>
                    <h1>Hi {this.props.allPosts[0].author} </h1>
                    <button className="btn btn-primary pull-right">Add new post</button>
               </Wrapper>;
        }




        return (
            <div className='container'>
                <div className="UserPosts-heading">
                    {heading}
                </div>
                {allPosts}
            </div>

        )
    }
}
const mapStateToProps =(state) => {
  return {
      allPosts: state.postReducer.allPostsFromUser,
      fetched: state.postReducer.allPostsFromUserFetched,
      authUser: state.userReducer.currentUser,
  }
};

export default connect(mapStateToProps, {fetchAllPostsFromUser}) (UserPosts);