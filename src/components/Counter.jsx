import useCounterStore from "../store/useCounterStore";

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;