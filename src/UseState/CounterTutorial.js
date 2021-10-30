import { useState } from 'react';

const CounterTutorial = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter > 0 ? counter - 1 : 0);

  return (
    <>
      {counter}
      <button onClick={increment}>(+) Increment</button>
      <button onClick={decrement}>(-) Decrement</button>
    </>
  )
};

export default CounterTutorial;