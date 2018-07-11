import React, { Component } from 'react';



class Signup extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}




export default Signup;