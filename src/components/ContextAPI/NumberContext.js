import React , { Component, createContext } from "react";
// import NumberContext from "./NumberContext";

export const NumberContext = createContext()


export class NumberProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    }
  }

  updateNumber = () => {
    // this.setState({
    //   number: this.state.number + 1
    // })
    // this.setState({
    //   number: this.state.number + 1
    // })

    this.setState(state => ({
      number: state.number + 1
    }))

    this.setState(state => ({
      number: state.number + 1
    }))
  }

  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          updateNumber: this.updateNumber
        }}
      >
       { this.props.children}
      </NumberContext.Provider>
    )
  }

}

