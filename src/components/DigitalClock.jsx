import React, { useEffect, useState } from "react";

function DigitalClock() {

  const [currentDate,setCurrentDate]=useState(new Date())
  useEffect(() => {
    function updateTime() {
      setCurrentDate(new Date());
    }
    let timer = setInterval(updateTime, 500);

    return ()=>clearInterval(timer)
  }, []);
  const formatDate = (date)=>{
    return date.toLocaleDateString()
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Digital Clock</h1>
        <div className="text-6xl font-mono text-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
        {currentDate.getHours()}:{currentDate.getMinutes()}:{currentDate.getSeconds()}
          <span className="text-2xl ml-2">
            {currentDate.getHours() >= 12 ? "PM" : "AM"}
          </span>
        </div>
        <div className="text-2xl font-light text-white mt-4">
          {formatDate(currentDate)}
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
