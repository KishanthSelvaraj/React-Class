import React, { useEffect, useState } from "react";
import axios from "axios";

const Advise = () => {
  const [advice, setAdvice] = useState("Life jinga la laaa...");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    console.log(res.data.slip.advice);
    setAdvice(res.data.slip.advice);
    setCount(count + 1);
  };

  useEffect(()=>{
    getAdvice()
  },[])
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h3 className="text-xl font-semibold mb-4 text-center italic">
          {advice}
        </h3>
        <button
          onClick={getAdvice}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition "
        >
          Get Advice
        </button>
        <p className="mt-4 text-gray-600">
          You've received advice {count} times.
        </p>
      </div>
    </div>
  );
};

export default Advise;
