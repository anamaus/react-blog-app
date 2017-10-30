import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  //Atate is the state of the component, state inside that component
  //Pprops can change on the outside, state inside
  //Props can be assigned to state only as initial values.

  //Managing state in different components can become unpredictable and hard to track and manage.
  //that's why we use Redux.

  //react app will only rerender if the state has changed with set.state()
  constructor(props) {
    super();
    // this.age = props.user.age;
    this.state = {
      age: props.user.initialAge,
      homeLink: 'another link',
    }
    //if I use 'this' in function, then I need to bind this, otherwise no.
    this.onMakeOlder = this.onMakeOlder.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onMakeOlder() {
    this.setState({
      //this.state.age is old, unchanged value
      age: this.state.age  += 3
    })
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value,
    })
  }



  render() {
    const {name, age, hobbies} = this.props.user;
    return (
      <div>
        <h1>Hello, {this.props.user.name}</h1>
        <h1>My name is {name}</h1>
        <h1>My age is {this.state.age}</h1>
        <p>My hobbies are</p>
        <ul>
          {  hobbies.map((hobby, index) => <li key={index} >{hobby}</li>)}
        </ul>
        <hr/>

        <button className="btn btn-primary" onClick={this.onMakeOlder}>Make me older</button>
        <hr/>

        //function passed from parent compenent
        <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
        <hr/>

        <input type="text" value={this.state.homeLink} onChange={this.onHandleChange}/>
        /*input value cant be changed if there is no onChange method attached to it.
        without onchnage method it's a one way binding, read only value. With onChange methos
        it becomes 2way binding.
        */


        /*
        Whaterev we type in input field, we set to be Home component this.state.homeLink.
        On button click we send that value to parent component(app),
        it becomes parent component's state, and gets passed to header component
        */

        <button className="btn btn-primary" onClick={this.onChangeLink}>Change link</button>
      </div>
    )
  }
}
 // proptypes needs to be imported as a library.
 // it ensures that we entered the correct type, because js is weekly typed language.
 // {this.props.children}//text imported from parent element
 Home.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  user: PropTypes.object,
  greet: PropTypes.func,
  initialLink: PropTypes.string,
}
