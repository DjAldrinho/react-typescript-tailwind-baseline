import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './counterApp.css';

export const CounterApp = ({defaultCounter}: any) => {

    let [counter, setCounter] = useState(defaultCounter);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSub = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(defaultCounter);
    }

    return (
        <div>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSub}>-1</button>
        </div>
    );
}

CounterApp.propsTypes = {
    defaultCounter: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
   defaultCounter: 5
}
