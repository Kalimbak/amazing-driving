import React from "react";
import { increment, decrement } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
  return (
    <div>
      <h3>Amazing technology</h3> <br />
      <p> This is the landing page </p> <br />

      <h4> This is a counter </h4>
      <p>Counter: <span>{counter}</span></p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
    
  );
}
export default Home;
