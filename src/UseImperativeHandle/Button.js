import { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToogle] = useState(false); 

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToogle(!toggle);
    },
  }));
  
  return (
    <>
      <button>
        Button from child
      </button>
      {toggle && <span>Toogle</span>}
    </>
  );
});

export default Button;