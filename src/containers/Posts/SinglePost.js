import React from 'react';
import { connect } from 'react-redux';
import {fetchPost} from '../../actions/postActions';

class Post extends React.Component {

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id)
    }

    render() {
        const {post} = this.props;

        let buttons = null;

        if (this.props.authUser && this.props.authUser.id === post.userId ) {
            buttons =
                <div className="buttons pull-right">
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
        }


        return (
            <div className="container">
                <div className="UserPosts-heading">
                   <h1>{post.author}</h1>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">{post.title}</div>
                    <div className="panel-body">
                        <div className="panel-content">{post.content}</div>
                    </div>

                    <div className="panel-footer clearfix">
                        date
                        {buttons}
                    </div>

                </div>
            </div>
        )
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        post: state.postReducer.post,
        authUser: state.userReducer.currentUser,
    }
};

export default connect(mapStateToProps, { fetchPost })(Post);