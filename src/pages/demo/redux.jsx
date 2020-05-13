import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default function DemoRedux() {

    const countReducer = function (state = 0, action) {
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state;
        }
    };

    const action = {
        type: 'INCREMENT'
    }

    const changeState = () => {
        store.dispatch(action);
    }

    let store = createStore(countReducer);
    console.log(store.getState());

    store.subscribe(() => {
        console.log('STATE UPDATE: ', store.getState());
    });

    return (
        <div>{store.getState()}
        <button onClick={changeState}>Click here</button>
        </div>
    )
}