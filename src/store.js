import { createStore } from 'redux';

//Initial state for my store
const initial = {
    current: 'red', //can also be black
    board: [
        [], //col 0
        [], //col 1
        [], //col 2
        [], //col 3
        [], //col 4
        [], //col 5
        [], //col 6
    ],
};

function reducer(state, action) {
    if (action.type === 'DROP_TILE') {
        console.log('dropping onto col ' + action.payload)
    }
    return state;
}

export default createStore(reducer, initial);

