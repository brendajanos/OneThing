import React from "react";
import useVariableFont from "react-variable-fonts";

const initialSettings = {
    BVEL: 20,
    SHDW: 50
}

const Demo = () => {
  const [normalStyles] = useVariableFont("Courier New", "normal");
  const [customStyles, updateStyles] = useVariableFont("Courier New", initialSettings);

  const randomSetting = () => Math.floor(Math.random() * 100);

  return (
    <>
      <h1 style={{ ...normalStyles }}>Hello World</h1>
      <h1 style={{ ...customStyles }}>Hello Variable Fonts</h1>
      <button onClick={() => updateStyles({ SHDW: randomSetting() })}>
      </button>
    </>
  );
};

export default Demo;