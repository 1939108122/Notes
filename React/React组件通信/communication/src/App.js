import React, { Component } from 'react';
import Demo from './demo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '父组件'
    }
  }
  changeName(name) {
    this.setState({
      name
    })
 }

  render() { 
    return (
      <div>
        <p>父组件--- {this.state.name }</p>
        <Demo  passname = { this.state.name } changeName={ this.changeName.bind(this) }/>
      </div>
    );
  }
}
 
export default App;