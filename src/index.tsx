import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {CounterApp} from "./counter-app/CounterApp";
import {GreetApp} from "./greet-app/GreetApp";


ReactDOM.render(
    <React.StrictMode>
        <GreetApp  name={'Aldray'}/>
        <CounterApp defaultCounter={10}/>
    </React.StrictMode>,
    document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
