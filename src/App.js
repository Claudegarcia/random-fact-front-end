import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [fact, setFact] = useState({});
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then(res => res.json())
      .then(res => setFact(res));
  }, []);
  return (
    <div className="App">
      <h1>{fact}</h1>

      <button
        className="Button"
        onClick={() =>
          fetch(process.env.REACT_APP_URL)
            .then(res => res.json())
            .then(res => setFact(res))
        }
      >
        NEW FACT
      </button>
    </div>
  );
}
