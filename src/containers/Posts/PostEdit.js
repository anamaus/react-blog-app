import React from 'react';
import { connect } from 'react-redux';
import {fetchPostEdit} from '../../actions/postActions';

class PostEdit extends React.Component {

    componentDidMount() {
        if (!this.props.userAuth) {
            this.props.history.push('/login');
        } else if (this.props.post.userId !== this.props.userAuth.id ) {
            this.props.history.push('/forbidden');
        } else {
            this.props.fetchPostEdit(this.props.match.params.id)
        }
    }

    render() {
        return (
            <div className='Edit col-sm-6 col-sm-offset-3'>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label>
                            Title:
                            <input type="text" value={this.props.post.title}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Content:
                            <textarea value={this.props.post.content} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.postReducer.post,
        userAuth: state.userReducer.currentUser,
    }
};

export default connect(mapStateToProps,  {fetchPostEdit})(PostEdit);