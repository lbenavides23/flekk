import React, { Component } from 'react';



class Notfound extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}




export default Notfound;