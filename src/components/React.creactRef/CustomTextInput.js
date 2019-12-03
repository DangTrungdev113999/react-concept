import React, { Component, Fragment} from "react"

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  // focusTextInput() {
  //   this.textInput.current.focus();
  // }

  

  render() {
    
    return (
      <Fragment>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          // onClick={this.focusTextInput}
        />
      </Fragment>
    );
  }
}

export default CustomTextInput


// function compment


// function CustomTextInput(props) {
//   // textInput must be declared here so the ref can refer to it
//   let textInput = React.createRef();

//   function handleClick() {
//     textInput.current.focus();
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         ref={textInput} />

//       <input
//         type="button"
//         value="Focus the text input"
//         onClick={handleClick}
//       />
//     </div>
//   );
// }`