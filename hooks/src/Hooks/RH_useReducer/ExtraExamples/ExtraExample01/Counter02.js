// please skip this
// this is just a demo for doing things hard way, go to Counter03 to do same thing better way

import React, { useReducer } from 'react';

const initVAL = {
    firstVAl: 0,
    secondVAL: 10
};

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return { ...state, firstVAl: state.firstVAl + (action.value || 0) };
        case "decrement":
            return { ...state, firstVAl: state.firstVAl - (action.value || 0) };
        case "increment5":
            return { ...state, secondVAL: state.secondVAL + (action.value || 0) };
        case "decrement5":
            return { ...state, secondVAL: state.secondVAL - (action.value || 0) };
        case "reset":
            return initVAL;
        default:
            return state;
    }
};

function Counter02() {
    const [count, dispatch] = useReducer(reducer, initVAL);

    return (
        <div>
            <div>First Counter: {count.firstVAl}</div>
            <div>Second Counter: {count.secondVAL}</div>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "increment5", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

export default Counter02;
