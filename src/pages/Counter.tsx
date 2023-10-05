// Counter.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/first-action";
import { RootState } from "../types/root-state";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count.count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
