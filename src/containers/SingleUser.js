import React from "react";
import Axios from "axios";

import {connect} from "react-redux";
import {fetchCurrentUser} from "../actions/userActions"

import {SingleUserPage} from "../components/SingleUserPage"

class SingleUser extends React.Component {

  componentWillMount() {
    this.props.fetchCurrentUser(this.props.match.params.id);
  }

  render() {
    const {currentUser} = this.props;
    let currentUserPage = null;

    if(this.props.currentUserFetched) {
      currentUserPage = <SingleUserPage {...currentUser} />
    }
    return (
      <div>
        {currentUserPage}
      </div>
    )

  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    currentUserFetched: state.userReducer.currentUserFetched
  }
}

export default connect(mapStateToProps, {fetchCurrentUser})(SingleUser);
