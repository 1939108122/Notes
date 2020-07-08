import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '儿子'
    }
  }
  handleClick() {
    this.props.changeName(this.state.value)
  }
  render() { 
    return ( 
      <div>
      <h3>子组件收到:{ this.props.passname}</h3>
      <button onClick={this.handleClick.bind(this)}>子组件修改父组件属性</button>
     </div>
    );
  }
}
 
export default Demo;