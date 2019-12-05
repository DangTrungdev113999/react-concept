import React, { Component, Fragment } from 'react';
import './App.css';

import Math from "./../LifeCycle/Math"; 
import CustomTextInput from "./../React.creactRef/CustomTextInput";
import AwesomeImage from "./../Higher-oder-Component/Awesomeimage";
import HoverImage from "./../Higher-oder-Component/HoverImage";
import List from "./../Render-Props/List";
import Couter from "./../Render-Props/Couter"

import {NumberContext , NumberProvider} from "./../ContextAPI/NumberContext"

const WrappedAwesomeImage  = HoverImage(AwesomeImage, 0.9);


class App extends Component {
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
    const { condition } = this.state;
    const data = ["A", "B", "C"];
    return (
      <div className="App">
        <h1> life-cycle </h1>
        {/* <button onClick={ this.onRemove } >remove</button><br/>
        {  condition && <Math/>  } */}

        <br/>
        <h1> React.creacteRef </h1>
        {/* <CustomTextInput/> */}

        <h1> Higher Oder-Component </h1>
        {/* <WrappedAwesomeImage src="https://loremflickr.com/400/400" /> */}

        <h1> Render Props </h1>
        {/* <List data={data} render={item => <div>{item}</div>} />
        <Couter>
          { ({count}) => <h1>{count}</h1> }
        </Couter> */}
        <h1> Context API </h1>
        <NumberProvider>
          <NumberContext.Consumer>
            {({number, updateNumber}) => 
              (<div> 
                <h1>{number}</h1>
                <button onClick={updateNumber}>updateNumber</button>
              </div>)
            }
          </NumberContext.Consumer>
        </NumberProvider>
      </div>
    );
  }
}

export default App;
