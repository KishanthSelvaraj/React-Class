import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  function count() {
    setCount1(count1 + 1);
  }

  useEffect(() => {
    console.log("useEffects");
  },[count2]);
  return (
    <div>
      <h1>UseEffects</h1>
      <h1>{count1}</h1>
      <h1>{count2}</h1>
      <button onClick={count}>Button 1</button>
      <button
        onClick={() => {
          setCount2(count2 + 5);
        }}
      >
        Button 2
      </button>
    </div>
  );
};

export default Effect;
