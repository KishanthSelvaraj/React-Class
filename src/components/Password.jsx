import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";
const Password = () => {
  const [length, setLength] = useState(8);
  const [Uppercase, setUppercase] = useState(true);
  const [Lowercase, setLowercase] = useState(true);
  const [Numbers, setNumbers] = useState(true);
  const [Symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  function convert() {
    let charset = "";
    if (Uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (Lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (Numbers) charset += "0123456789";
    if (Symbols) charset += "!@#$%^&*()-_=+";
    console.log(charset);

    let generatePassword = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * charset.length);
      generatePassword += charset[random];
      console.log(random);
      console.log(generatePassword);
    }

    setPassword(generatePassword);
  }

  function copy() {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-400">
      <div className="w-full max-w-sm p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Strong Password Generator
        </h2>
        <div className="mb-4">
          <label htmlFor="num" className="block text-white mb-2">
            Password Length:
          </label>
          <input
            type="number"
            id="num"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="upper"
            className="mr-2"
            checked={Uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          <label htmlFor="upper" className="text-white">
            Include Uppercase
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="lower"
            className="mr-2"
            checked={Lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          <label htmlFor="lower" className="text-white">
            Include Lowercase
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="numbers"
            className="mr-2"
            checked={Numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          <label htmlFor="numbers" className="text-white">
            Include Numbers
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="symbol"
            className="mr-2"
            checked={Symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
          <label htmlFor="symbol" className="text-white">
            Include Symbols
          </label>
        </div>
        <button
          onClick={convert}
          className="w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          Generate Password
        </button>
        <div className="relative mt-6">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full p-2 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <IoCopy
            onClick={copy}
            className="absolute right-2 top-2 cursor-pointer text-white text-lg hover:text-red-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Password;
