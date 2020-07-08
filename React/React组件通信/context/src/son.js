import React, { Component } from 'react';
import GrandSon from './grandson'

class Son extends Component {
  // static contextType = GlobalContext;
  render() {
    return (
      <div>
        <p>子组件</p>
        <GrandSon />
      </div>
    )
  }
}
 
export default Son;