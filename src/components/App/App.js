import React from 'react';
import './App.css';

import Math from "./../LifeCycle/Math"; 
import CustomTextInput from "./../React.creactRef/CustomTextInput";
import AwesomeImage from "./../Higher-oder-Component/Awesomeimage";
import HoverImage from "./../Higher-oder-Component/HoverImage";

const WrappedAwesomeImage  = HoverImage(AwesomeImage, 0.9);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true
    }
  }

  componentDidMount() {
    console.log("App did Mount");
 
  }

  onRemove = () => {
    this.setState({
      condition: false
    })
  }

  render() {
    console.log("App render");
    console.log("App render");
    console.log("App render");
    console.log();
    const { condition } = this.state
    return (
      <div className="App">
        <h1> life-cycle </h1>
        <button onClick={ this.onRemove } >remove</button><br/>
        {  condition && <Math/>  }

        <br/>
        <h1> React.creacteRef </h1>
        <CustomTextInput/>

        <h1> Higher Oder-Component </h1>
        <WrappedAwesomeImage src="https://loremflickr.com/400/400" />
      </div>
    );
  }
}

export default App;
