import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Counter from './Counter';
// import Showhide from './Showhide'
import NoArrow from './NoArrow';
// import List from './List'
// import Fetch from './Fetch'
// import Axios from './Axios';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Showhide /> */}
    {/* <Counter />  */}
    <NoArrow />
    {/* <List /> */}
    {/* <Fetch /> */}
    {/* <Axios /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
