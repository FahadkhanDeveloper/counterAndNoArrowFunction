// import React, { Component } from 'react'

// export default class Fetch extends Component {
//     constructor() {
//         super();
//         this.state = {
//             list: []
//         }
//     }
//     render() {
//         const loadData = () => {
            
//             fetch("https://api.github.com/users")
//                 .then((response) => response.json())
//                 .then((data) => {
//                     this.setState({
//                         list: data
//                     })
//                 })
//         }
        // return (
        //     <div>
        //         <ol>
        //             {
        //                 this.state.list.map(
        //                     (m, i) => <li key={i}>{m.login} - 
        //                     <img src={m.avatar_url} alt={m.login}/></li>
        //                 )
        //             }
        //         </ol>
                
        //         <button onClick={loadData}>Fetch</button>
        //     </div>
        // )
//     }
// }



import {Component} from 'react';
export default class Fetch extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    render() {
        const fetchData = () => {
            fetch("https://api.github.com/users")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    list: data
                })
            })
        }

        return (
            <div>
                <ol>
                    {
                        this.state.list.map(
                            (m, i) => <li key={i}>{m.login} - 
                            <img src={m.avatar_url} alt={m.login}/></li>
                        )
                    }
                </ol>
                
                <button onClick={fetchData}>Fetch</button>
            </div>
        )
       
    }
}
