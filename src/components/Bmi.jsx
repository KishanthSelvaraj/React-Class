import React, { useState } from "react";

function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBmi = () => {
    console.log(height, weight);
    let bmivalue;
    if (height && weight) {
      bmivalue = (weight / (height / 100) ** 2).toFixed(2);
      setBmi(bmivalue);

      if (bmivalue < 18.5) {
        setBmiStatus("UnderWeight");
      } else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmivalue >= 25 && bmivalue < 29.9) {
        setBmiStatus(" OverWeight");
      } else {
        setBmiStatus("Obese");
      }
    }
    console.log(bmivalue);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4">BMI Calculator</h1>
        <div className="input-container mb-4">
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-700"
          >
            Height (cm):
          </label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="input-container mb-4">
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray"
          >
            Weight (kg):
          </label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          onClick={calculateBmi}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Calculate BMI
        </button>
        {bmi ? (
          <div className="result mt-4 p-4 bg-gray-100 rounded-lg">
            <p>
              Your BMI is: <span className="font-bold">{bmi}</span>
            </p>
            <p>
              Status: <span className="font-bold">{bmiStatus}</span>
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Bmi;
