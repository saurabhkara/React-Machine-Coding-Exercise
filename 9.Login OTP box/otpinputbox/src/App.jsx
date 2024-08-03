import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const emptyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emptyArr);
  const [missing, setMissing] = useState(emptyArr);
  const CODE = "1234";

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleOnChnage = (e, index) => {
    const value = e.target.value;
    if (!Number(value)) {
      return;
    }

    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }
    const copyInput = [...inputs];
    copyInput[index] = value;
    setInputs(copyInput);
  };

  const handleOnKeyDown = (e, index) => {
    if (e.keyCode === 8) {
      const copyInput = [...inputs];
      copyInput[index] = "";
      setInputs(copyInput);
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handleOnPaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (!Number(data) || data.length !== inputs.length) {
      return;
    }

    const sData = data.split("");
    setInputs(sData);
    refs[inputs.length - 1].current.focus();
  };

  const handleSubmit = () => {
    const missingArr = inputs
      .map((item, index) => {
        if (item === "") {
          return index;
        }
      })
      .filter((item) => item || item == 0);
    setMissing(missingArr);
    if (missing.length) {
      return;
    }
    const codeString = inputs.join("");
    const isMatch = codeString === CODE;
    const mgs = isMatch ? "CODE is valid" : "Code is Wrong";
    alert(mgs);
  };
  return (
    <div className="app">
      <h1>Two factor code Input</h1>
      <div>
        {emptyArr.map((a, index) => {
          return (
            <input
              placeholder=""
              key={index}
              maxLength={1}
              type="text"
              ref={refs[index]}
              value={inputs[index]}
              onChange={(e) => handleOnChnage(e, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              onPaste={handleOnPaste}
              className={missing.includes(index) ? "error" : ""}
            />
          );
        })}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
