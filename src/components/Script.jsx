import React from "react";

const Script = () => {
  const Login = false;
  let greet;
  if (Login) {
    greet = <p>You Logged in!!</p>;
  } else {
    greet = "Please , Login first";
  }

  let arr = ["apple", "orange", "banana", "kiwi"];
  return (
    <div>
      Script file
      <p>25+25 = {25 + 25}</p>
      <p>{greet}</p>
      <ul>
        {arr.map((items,index) => {
          return <li key={index}>{items}</li>;
        })}
        <li>hello</li>
      </ul>
    </div>
  );
};

export default Script;
