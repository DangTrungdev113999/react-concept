import React, { Component } from "react";

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  handleClick() {
    try {
      console.log("abc")
    } catch (error) {
      this.setState({ error });
    }
  }

  render() { 
    if (this.state.error) {
      console.log(this.state.error)
    }
    return (
       <div onClick={this.handleClick}>Click Me</div>
    )
  }
}

export default ErrorBoundaries;