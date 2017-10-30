import React from "react";
import {connect} from "react-redux";

import { UserRedux } from '../components/UserRedux';
import { MainRedux } from '../components/MainRedux';

//import actions
import { setName } from '../actions/userActions';


class App extends React.Component {
    render() {
        return (
            <div className="container">
              <MainRedux changeUsername={this.props.setName}/>
              <UserRedux username={this.props.user.name}/>
            </div>
        );
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  }
}

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name)=> {
      dispatch(setName(name))
    },
  }
};

//connect connects react with redux, connect this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);

//if there is only 1 or 2 actions we dont need mapDispatchToProps:
// export default connect(mapStateToProps, {setName})(App);
