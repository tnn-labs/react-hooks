import { useRef } from 'react';

const RefTutorial = () => {
  const inputRef = useRef(null);
    
  const onClickButton = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>RefTutorial</h1>
      <input type="text" placeholder="Example" ref={inputRef} />
      <button onClick={onClickButton}>Change text</button>
    </>
  );
};

export default RefTutorial;