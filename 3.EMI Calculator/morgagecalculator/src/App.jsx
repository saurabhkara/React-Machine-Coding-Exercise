import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    if (id === "pricipal") {
      setPrincipal(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYears(value);
    }
  };

  const calculateEmi = () => {
    let r = interest;
    // P(r(1+r)^n/((1+r)^n)-1))
    if (principal && interest && years) {
      r = r / 12 / 100;
      const calcPow = Math.pow(1 + r, years * 12);
      const amount = (principal * (r * calcPow)) / (calcPow - 1);
      setEmi(Math.round(amount));
    }
  };

  useEffect(() => {
    calculateEmi();
  }, [interest, years, principal]);

  return (
    <div className="loan-calc">
      <h1>Morgage Calculator</h1>
      <div className="inputs">
        <p>Principal :</p>
        <input type="number" id="pricipal" onChange={handleOnChange} />
        <p>Interest :</p>
        <input type="number" id="interest" onChange={handleOnChange} />
        <p>Years :</p>
        <input type="number" id="year" onChange={handleOnChange} />
      </div>
      <div>
        <p>
          Your EMI is <b>{emi}</b>
        </p>
      </div>
    </div>
  );
}

export default App;
