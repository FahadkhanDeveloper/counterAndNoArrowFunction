import {Component} from 'react'
export default class Showhide extends Component {
  constructor() {
    super();
    this.state={
      label : "show",
      status: true
    }
  }
  render() {
    return(
      <div>
        {this.state.status && <h1>this is some text in the h1</h1>}
        <button onClick={() => {
          this.setState({
            label:this.state.label,
            status:!this.state.status

          })
        }}>{this.state.label}</button>
      </div>
      
    )
  }
}


// import { Component } from 'react'

// export default class Showhide extends Component {
//     constructor() {
//         super();
//         this.state = {
//             label: "hide",
//             status: true
//         }
//     }
//   render() {
//     return (
//       <div>
//         {this.state.status && <h1>Some Text that needs to be a longer text</h1>}
//         <button onClick={() => {
//           this.setState({
            
//             label: "show",
//             status: !this.state.status
//           })
//         }}>{this.state.label}</button>
//       </div>
//     )
//   }
// }
