"use client";
import React, { useEffect, useState } from "react";
const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");


  useEffect(() => {
    calculateResult()
  }, [input]);

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const deleteLastCharacter = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const sanitizedInput = input.replace(/X/g, "*");
      const calculatedResult = eval(sanitizedInput);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('');
      console.error('Error',error)
    }
  };

  return (
    <div className="w-2/4 mx-auto mt-10 p-5 rounded bg-slate-400">
      <div className="text-center font-semibold pb-3 text-lg">
        <h1>Calculator</h1>
      </div>
      <div className="relative">
      <input
        type="text"
        className="w-full p-2 mb-2  rounded text-2xl h-28 bg-white"
        value={input}
        placeholder="0"
        disabled
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <span className="text-2xl">{result}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => handleButtonClick("7")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick("8")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick("9")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick("4")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick("5")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick("6")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick("1")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick("2")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick("3")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick("0")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick(".")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          .
        </button>
        <button
          onClick={() => handleButtonClick("+")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          +
        </button>
        <button
          onClick={() => handleButtonClick("-")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          -
        </button>
        <button
          onClick={() => handleButtonClick("X")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          X
        </button>
        <button
          onClick={() => handleButtonClick("/")}
          className="p-2 bg-blue-200 rounded hover:bg-blue-300"
        >
          /
        </button>
        <button
          onClick={deleteLastCharacter}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          DEL
        </button>
        <button
          onClick={clearInput}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          C
        </button>
        <button
          onClick={calculateResult}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
