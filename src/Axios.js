import {Component} from "react";
import axios from 'axios';
export default class Axios extends Component {
    constructor() {
        super();
        this.state= {
            users: []
        }
    }
    render() {
        const loadData = async() => {
                const {data} = await axios.get("https://api.github.com/users");
                this.setState({
                    users: data
                })
        }
        return(
            <div>
                <ul>
                    {
                        this.state.users.map((m,i) => <li key={i}> {m.login} - <img src={m.avatar_url} alt={m.login} /></li>)
                    }
                </ul>
                    <button onClick={loadData}>Load Data</button>
            </div>
        )
    }
}


// import { Component } from 'react'
// import axios from 'axios'
// export default class Axios extends Component {
//     constructor() {
//         super();
//         this.state = {
//             users: []
//         }
//     }
//     render() {
//         const loadData = async() => {
//             // in this api we need data therefore we destructure data we not desctructive it then we will write
//             // const resp = await axios.get("https://api.github.com/users");
//             //         this.setState({
//             //             users: resp.data
//             //         })
//             const {data} = await axios.get("https://api.github.com/users");
//                     this.setState({
//                         users: data
//                     })
//         }
//         return (
//             <div>
//                 <ol>
//                     {
//                         this.state.users.map(
//                             (m, i) => <li key={i}>{m.login} - 
//                             <img src={m.avatar_url} alt={m.login}/></li>
//                         )
//                     }
//                 </ol>
                
//                 <button onClick={loadData}>Fetch</button>
//             </div>
//         )
//     }
// }
