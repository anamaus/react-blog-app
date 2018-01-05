import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchAllPostsFromUser} from "../../../actions/postActions";
import BlogList from "../../../components/Blog/BlogList";
import Wrapper from '../../../hoc/Wrapper';
import {withRouter} from "react-router-dom";


import './UserPosts.css';

class UserPosts extends React.Component {
    componentDidMount() {
        this.props.fetchAllPostsFromUser(this.props.match.params.userId)
    }

    componentWillReceiveProps(nextprops){
        if(this.props.authUser && this.props.match.params.userId !== nextprops.match.params.userId) {
            console.log('nextprops', nextprops.match.params.userId);
            this.props.fetchAllPostsFromUser(nextprops.match.params.userId);
        }
    }

    componentWillUnmount(){
        console.log('unmounted');
    }

    render() {
        let allPosts=null;
        let heading = null;

        if (this.props.fetched) {
            allPosts = <BlogList posts={ this.props.allPosts } isHidden={true}/>;
            heading = <h1>{this.props.allPosts[0].author}'s posts</h1>
        }

        if (this.props.fetched && this.props.authUser &&  this.props.authUser.id === this.props.allPosts[0].userId) {
            heading =
                <Wrapper>
                    <h1>Hi { this.props.authUser.name} </h1>
                    <Link to={this.props.match.url + '/new'}  className="btn btn-primary pull-right">Add new post</Link>
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

export default withRouter(connect(mapStateToProps, {fetchAllPostsFromUser}) (UserPosts));