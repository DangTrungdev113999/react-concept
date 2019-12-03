import React, { Component, Fragment } from "react";


class AwesomeImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src } = this.props;
    return (
      <Fragment>
        <img src={src} />
      </Fragment>
    )
  }
}

export default AwesomeImage;