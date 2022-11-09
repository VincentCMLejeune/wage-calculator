import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [thirtyFiveWage, setThirtyFiveWage] = useState("");
  const [thirtyNineWage, setThirtyNineWage] = useState("");

  const [convertedThirtyfiveWage, setConvertedThirtyfiveWage] = useState(0);
  const [convertedThirtyNineWage, setConvertedThirtyNineWage] = useState(0);

  useEffect(() => {
    setConvertedThirtyfiveWage(((Number(thirtyFiveWage) / 35) * 39).toFixed(2));
  }, [thirtyFiveWage]);

  useEffect(() => {
    setConvertedThirtyNineWage(((Number(thirtyNineWage) / 39) * 35).toFixed(2));
  }, [thirtyNineWage]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wage Converter</h1>
        <div className="wage-calculator">
          <div className="wage-calculator-row">
            <div className="wage-input">
              <label htmlFor="thirtyfiveWage">35 Hour Wage : </label>
              <input
                type="number"
                id="thirtyfiveWage"
                value={thirtyFiveWage}
                onChange={(e) => setThirtyFiveWage(e.target.value)}
              />
            </div>
            <div className="wage-calculated">
              This makes {convertedThirtyfiveWage} for 39 hours.
            </div>
          </div>

          <div className="wage-calculator-row">
            <div className="wage-input">
              <label htmlFor="thirtyNineWage">39 Hour Wage : </label>
              <input
                type="number"
                id="thirtyNineWage"
                value={thirtyNineWage}
                onChange={(e) => setThirtyNineWage(e.target.value)}
              />
            </div>
            <div className="wage-calculated">
              This makes {convertedThirtyNineWage} for 35 hours.
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
