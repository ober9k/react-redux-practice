import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "./counterSlice.ts";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        Count: {count}
      </p>
      <p>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        &nbsp;
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </p>
      <p>
        <button aria-label="Increment value" onClick={() => dispatch(incrementByAmount(10))}>
          Increment +10
        </button>
        &nbsp;
        <button aria-label="Decrement value" onClick={() => dispatch(decrementByAmount(10))}>
          Decrement -10
        </button>
      </p>
    </div>
  );
}
