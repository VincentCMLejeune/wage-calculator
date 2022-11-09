import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [thirtyfiveWage, setThirtyfiveWage] = useState("");
  const [thirtyNineWage, setThirtyNineWage] = useState("");

  const [convertedThirtyfiveWage, setConvertedThirtyfiveWage] = useState(0);
  const [convertedThirtyNineWage, setConvertedThirtyNineWage] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wage Converter</h1>
        <div className="wage-input">
          <label htmlFor="thirtyfiveWage">35 Hour Wage</label>
          <input
            type="number"
            id="thirtyfiveWage"
            value={thirtyfiveWage}
            onChange={(e) => setThirtyfiveWage(e.target.value)}
          />
        </div>
        <div className="wage-input">
          <label htmlFor="thirtyNineWage">39 Hour Wage</label>
          <input
            type="number"
            id="thirtyNineWage"
            value={thirtyNineWage}
            onChange={(e) => setThirtyNineWage(e.target.value)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
