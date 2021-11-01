import { useLayoutEffect, useEffect } from 'react';

const LayoutEffectTutorial = () => {
  useEffect(() => {
    console.log('[2] - useEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('[1] - useLayoutEffect');
  }, []);
  
  return (
    <>
      <h1>LayoutEffectTutorial</h1>
    </>
  );
};

export default LayoutEffectTutorial;