import React, {Component} from 'react';


class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = { val :0 }
  }
  componentDidMount() {
    this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val)
  }
  render() { 
    return (
      <div>
        {`Couter is${this.state.val}`}----component
      </div>
    );
  }
}
 
export default Circle;
