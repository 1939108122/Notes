import React, { Component } from 'react';
import GlobalContext from './context'
import Son from './son'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '父组件的属性'
    }
  }
  render() { 
    return (
      <div>
        <p>这是父组件</p>
        <GlobalContext.Provider value = {this.state.value}>
          <Son />
        </GlobalContext.Provider>
      </div>
    );
  }
}
 
export default App;
