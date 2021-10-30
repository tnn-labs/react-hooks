import { useState } from 'react';

const InputTutorial = () => {
  const [inputValue, setInputValue] = useState('Rio de Janeiro');

  const onChangeInput = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <>
      <input placeholder="enter something..." onChange={onChangeInput} />
      {` `}
      {inputValue}
    </>
  );
};

export default InputTutorial;