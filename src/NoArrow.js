import { Component } from "react";

export default class NoArrow extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    // in no arrow function we use this below code
    this.change = this.change.bind(this);
  }
  // this not work because of this  this refer to current class object but in no arrow function setstate function is in render function and render function doesnot understand the setstate method
  // so this ask from render function that call setState which is not the function the method of render function
  change() {
    this.setState({
      count: 100,
    });
  }
  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.change}>Click</button>
      </div>
    );
  }
}
