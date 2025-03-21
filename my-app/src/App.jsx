import React, { useState, useEffect } from "react";
import FactCard from "./components/FactCard.jsx";
import "./style.css";

const App = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch random facts
  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      setFact("Failed to load fact. Try again!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFact(); // Fetch fact when the component loads
  }, []);

  return (
    <div className="container">
      <h1>Real-Time Facts</h1>
      <FactCard fact={fact} loading={loading} />
      <button onClick={fetchFact} className="fetch-button">
        Get New Fact
      </button>
    </div>
  );
};

export default App;
