import Button from "../../components/Button.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { decrement, decrementByAmount, increment, incrementByAmount } from "./counterSlice.ts";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => () => {
    dispatch(increment());
  };

  const handleDecrement = () => () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => () => {
    dispatch(incrementByAmount(10));
  };

  const handleDecrementByAmount = () => () => {
    dispatch(decrementByAmount(10));
  };

  return (
    <div>
      <p>
        Count: {count}
      </p>
      <p>
        <Button onClick={handleIncrement()}>Increment</Button>
        <Button onClick={handleDecrement()}>Decrement</Button>
      </p>
      <p>
        <Button onClick={handleIncrementByAmount()}>Increment +10</Button>
        <Button onClick={handleDecrementByAmount()}>Decrement -10</Button>
      </p>
    </div>
  );
}
