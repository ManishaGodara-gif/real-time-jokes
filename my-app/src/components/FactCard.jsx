import React from "react";

const FactCard = ({ fact, loading }) => {
  return (
    <div className="fact-card">
      {loading ? <p className="loading-text">Fetching fact...</p> : <p>{fact}</p>}
    </div>
  );
};

export default FactCard;
