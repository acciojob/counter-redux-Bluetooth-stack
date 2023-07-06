import { INCREAMENT, DECREMENT } from "../actions/action.types";

let initia_state = 0;

const actionReducers = (state = initia_state, action) => {
    switch (action.type) {
        case INCREAMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            state;
    }
}

export default actionReducers;