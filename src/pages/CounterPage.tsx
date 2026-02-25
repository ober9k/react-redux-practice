import Counter from "@features/counter/Counter.tsx";

export default function CounterPage() {
  return (
    <>
      <h2>Counter ft. Redux</h2>
      <p>
        This page will include the counter.
      </p>
      <h3>Counter 1</h3>
      <Counter/>
      <h3>Counter 2</h3>
      <Counter/>
    </>
  );
}
