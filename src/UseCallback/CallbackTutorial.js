import { useCallback, useState } from 'react';
import Child from './Child';

const CallBackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </>
  );
}

export default CallBackTutorial;