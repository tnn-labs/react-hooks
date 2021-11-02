import { useRef } from 'react';
import Button from './Button';

const ImperativeHandleTutorial = () => {
  const buttonRef = useRef(null);

  return (
    <>
      <button onClick={() => {buttonRef.current.alterToggle()}}>Button from parent</button>
      <Button ref={buttonRef} />
    </>
  ); 
};

export default ImperativeHandleTutorial;