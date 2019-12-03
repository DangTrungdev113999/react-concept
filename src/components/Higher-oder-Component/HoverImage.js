import React, { Component } from "react";

export default function(AwesomeImage, value = 0.5) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        condition: false
      }
    }

    onHover = () => {
      this.setState({
        condition: true
      })
    }

    onRemoveHover = () => [
      this.setState({
        condition: false
      })
    ]

    render() {
      const { condition } = this.state;
      return (
        <span 
          onMouseEnter={ this.onHover }
          onMouseLeave={ this.onRemoveHover }
          style={{ opacity: condition ? value : 1  }}
        >
          <AwesomeImage  {...this.props} />
        </span>
      )
    }
  }
}