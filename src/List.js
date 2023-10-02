import { Component } from 'react'

export default class List extends Component {
    constructor() {
        super();
         this.state = {
            marks : [3,5,6,7,4,7,8,9]
         }
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.marks.map((m,i) => <li key={i}>{m}</li>)
            }
        </ul>
      </div>
    )
  }
}
