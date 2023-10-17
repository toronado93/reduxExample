// Importing selector and dispatch from redux toolkit

import { useSelector, useDispatch } from "react-redux";

// Importing specific reduce action from slice.
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  equalizer,
} from "./counterSlice";

export default function Counter() {
  // Selecting state from slice via using useselector redux helper

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const adjustmentCount = useSelector((state) => state.counter.adjustmentCount);

  const resetAll = () => {
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(decrement({ stateType: "count" }));
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(increment({ stateType: "count" }));
          }}
        >
          +
        </button>
      </div>
      <p>{adjustmentCount}</p>
      <div>
        {" "}
        <input
          type="text"
          value={adjustmentCount}
          onChange={(e) => {
            dispatch(equalizer({ amount: e.target.value }));
          }}
        ></input>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount());
          }}
        >
          {" "}
          Add Value Top Of Main Value
        </button>
      </div>
    </section>
  );
}
