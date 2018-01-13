import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchAllPostsFromUser} from "../../../actions/postActions";
import BlogList from "../../../components/Post/PostList";
import Wrapper from '../../../hoc/Wrapper';
import {withRouter} from "react-router-dom";


import classes from './UserPosts.css';

class UserPosts extends React.Component {
    componentDidMount() {
        this.props.fetchAllPostsFromUser(this.props.match.params.userId)
    }

    //fecth posts from user if coming from another user preview
    componentWillReceiveProps(nextprops){
        if(this.props.authUser && (this.props.match.params.userId !== nextprops.match.params.userId)) {
            this.props.fetchAllPostsFromUser(nextprops.match.params.userId)
        }
    }

    render() {
        let allPosts=null;
        let heading = null;

        if (this.props.noPosts) {
            allPosts = <h3 className={classes.NoPosts}>You don't have any posts.</h3>
        }

        if (this.props.fetched && !this.props.noPosts) {
            allPosts = <BlogList posts={ this.props.allPosts } isHidden={true}/>;
            heading = <h1>{this.props.allPosts[0].author}'s posts</h1>
        }



        if (this.props.fetched && this.props.authUser &&  this.props.authUser.id === this.props.match.params.userId) {
            heading =
                <Wrapper>
                    <h1>Hi, { this.props.authUser.name}   </h1>
                    <Link to={this.props.match.url + '/new-post'}  className={classes.Button}>Add new post</Link>
                    <hr style={{borderTopColor: '#fff'}}/>
               </Wrapper>;
        }

        return (
            <div className='container'>
                <div className={classes.UserPostsHeading}>
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
      noPosts: state.postReducer.allPostsFromUserEmpty
  }
};

export default withRouter(connect(mapStateToProps, {fetchAllPostsFromUser}) (UserPosts));