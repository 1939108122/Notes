import React, {Component} from 'react';

// 合成事件的state是异步的
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { val :0 }
    this.stateChange = this.stateChange.bind(this)
  }
  render() { 
    return (
      <div onClick={this.stateChange}>
        {`Couter is${this.state.val}`}---Onclick
      </div>
    );
  }
  stateChange() {
    this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val)  //0 拿到的是更新之前的state
  }
}
 
export default App;
