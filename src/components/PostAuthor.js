import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { fetchAuthor } from '../actions/userActions';



class PostAuthor extends React.Component {


  componentWillMount(){
    this.props.fetchAuthor(this.props.id);
  }

  render() {
    return (
      <span>{this.props.id}</span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    author: state.userReducer.author,

  }
}

export default connect(mapStateToProps,{fetchAuthor})(PostAuthor);
