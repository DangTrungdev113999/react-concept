import React, { Component, Fragment } from "react";


class Math extends Component {
  constructor(props) {
    console.log("Constructor Math")
    super(props);
    this.state = {
      currentValue : 0
    }
  }

  componentDidMount() {
    console.log("Math did Mount");
  }

  componentDidUpdate() {
    console.log("Math did Update");
  }

  componentWillUnmount() {
    console.log("Math will Unmount")
  }

  increase = () => {
    this.setState({
      currentValue: this.state.currentValue + 1
    })
  }

  decrease = () => {
    this.setState({
      currentValue: this.state.currentValue -1
    })
  }

  render() {
    console.log("Math render");
    const { currentValue } = this.state;
    return (
      <Fragment>
        <input type='button' value="+" onClick={this.increase} />
        <span>{currentValue}</span> 
        <input type='button' value="-" onClick={this.decrease} /> 
      </Fragment>

    )
  }
}


export default Math