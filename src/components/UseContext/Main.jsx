import React, { createContext, useState } from "react";
import Sub from "./Sub";

export const TextContext = createContext();
const Main = () => {
  const [text, setText] = useState("Kishanth");
  return (
    <TextContext.Provider value={text}>
      Main
      <Sub />
    </TextContext.Provider>
  );
};

export default Main;
