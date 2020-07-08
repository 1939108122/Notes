import React, { Component } from 'react';
import GlobalContext from './context';

class GrandSon extends Component {
  // static contextType = GlobalContext;
  render() {
    return (
      <GlobalContext.Consumer>
        {context => {
              // console.log(context)
            return (
                <div>
                  <p>孙子组件</p>
                  <h4>{context}</h4>
                </div>
                  )
            }}
      </GlobalContext.Consumer>
    )
  }
}
 
export default GrandSon;