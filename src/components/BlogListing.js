import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getPost} from "../actions/postActions";
import PostAuthor  from './PostAuthor';



class BlogListing extends React.Component {


  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.title}</div>
        <div className="panel-body">
          <div className="panel-content">{this.props.content}</div>
        <Link to={"/posts/"+this.props.id} className="btn btn-success" onClick={this.onGetPost}>Read more</Link>
      {/* <div className="panel-date">{this.props.posts[0].date.$date}</div> */}
          <div className="panel-author">by <Link to={"/users/"+this.props.id}>{this.props.author}</Link></div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.post,
  }
}

export default connect(mapStateToProps)(BlogListing);
