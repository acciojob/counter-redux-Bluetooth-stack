
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { increament, decrement } from "../redux/actions/action.creator";

const App = () => {
  const counter = useSelector(state=>state)
  const dispatch = useDispatch();
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{counter?counter:0}</h1>
        <button onClick={()=>{dispatch(increament())}}>increment</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    </div>
  )
}

export default App
