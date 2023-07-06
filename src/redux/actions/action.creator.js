import { INCREAMENT, DECREMENT } from "./action.types";

export const increament = ()=>{
    return{
        type: INCREAMENT,
    }
}

export const decrement = ()=>{
    return{
        type: DECREMENT,
    }
}