import {Component} from 'react'
export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

    }
    render() {
        const inc=() => {
            this.setState({
                count:this.state.count +1
            })
        }
        const dec=() => {
            this.setState({
                count:this.state.count  -1
            })
        }
        const reset=() => {
            this.setState({
                count:0
            })
        }
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
    }
}

// import {Component} from 'react'
// export default class Counter extends Component {
//     constructor() {
//         super();
//         // here we initialize the state or this initial state
//         // there is one state and which is count
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         const Inc = () => {
//                 // console.log('clicked')
//                 this.setState({
//                         // below count is original state and we modify it
//                     count: this.state.count + 1
//                    }
//                 )        
//         }
//         const Dec = () => {
//             this.setState({
//                  count: this.state.count - 1
//             }    
//             )        
//     }
//     const reset = () => {
//         this.setState({
//             // count: this.state.count =0
//             // or
//             count:0
//         })       
// }
//         return(
           
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={Inc}>plus</button>
//                 <button onClick={Dec}>Dec</button>
//                 <button onClick={reset}>reset</button>

//             </div>
//         )
//     }
// }