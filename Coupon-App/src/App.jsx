import React, { useState } from "react";

const styles = {
  container: {
    fontFamily: "Arial",
    maxWidth: "400px",
    width: "100%",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  select: {
    padding: "8px",
    fontSize: "16px",
    width: "100%",
    borderRadius: "6px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginLeft: "auto",
     display: "block",    
  },
  resultBox: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#e3f2fd",
  },
  span: {
    fontWeight: "bold",
    color: "#FF0000",
    fontWeight: "bold",
    fontSize: "80px",
  }
};

function Coupon() {
  const [selectedChain, setSelectedChain] = useState("");
  const [submittedChain, setSubmittedChain] = useState("");

  const fastfoodChains = {
    "McDonalds": (
      <>
        You voted for McDonald's. Here's your <span style={styles.span}>50% </span>discount coupon!
      </>
    ),
    "KFC": (
      <>
        You voted for KFC. Here's your <span style={styles.span}>50% </span>discount coupon!
      </>
    ),
    "Jollibee": (
      <>
        You voted for Jollibee. Here's your <span style={styles.span}>50% </span>discount coupon!
      </>
    ),
  };

  const handleChange = (e) => {
    setSelectedChain(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedChain(selectedChain);
  };

  return (
    <div style={styles.container}>
      <h1>Select Your Favorite Fast Food Chain</h1>
      <form onSubmit={handleSubmit}>
        <select style={styles.select} value={selectedChain} onChange={handleChange}>
          <option value="">- Select One -</option>
          {Object.keys(fastfoodChains).map((chain) => (
            <option key={chain} value={chain}>
              {chain}
            </option>
          ))}
        </select>
        <br /><br />
        <button type="submit" style={styles.button} disabled={!selectedChain}>
          Vote
        </button>
      </form>

      {submittedChain && (
        <div style={styles.resultBox}>
          <h2>Coupon Selected:</h2>
          <p>{fastfoodChains[submittedChain]}</p>
        </div>
      )}
    </div>
  );
}

export default Coupon;
