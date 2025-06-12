import { useState } from 'react'
import './App.css'
function PollSurvey() {
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [votes, setVotes] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // add new option
  function handleAddOption() {
    if (newOption.trim() !== "") {
    
      setOptions([...options, newOption]); // array for storing options
      setVotes([...votes, 0]); // set initial votes to 0 for new options
      setNewOption(""); // clear input after add
    }
  }

  // handle clicking vote button
    function handleVote() {
    if (selectedOption === null) {
      alert("Please select an option before voting.");
      return;
    }

    const updatedVotes = [...votes];  // create copy of votes
    updatedVotes[selectedOption] += 1; // increment vote for selected opt
    setVotes(updatedVotes);  //update vote state

    // log results
    console.log("Poll Results:");  
    options.forEach((option, index) => {
      console.log(`${option}: ${updatedVotes[index]} vote(s)`);
    });

    setSelectedOption(null); // clear selected option after voting
  }

  return (

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black" }}>
    <div style={{ padding: "20px"}}>
      <h1>Poll Survey</h1>
      <h2>Add Question</h2>
      <div style={{ marginBottom: "10px", padding: "20px" }}>
      <label><textarea
         style={{
      width: '300px',
      height: '50px',
      fontSize: '16px',
      padding: '8px'
    }}
    placeholder="Enter question "
></textarea></label></div>

      <h2>Add Option/s</h2>
      <input
        type="text"
        placeholder="Add an option"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
      />
      <button style={{border:"1px solid black", marginLeft: "10px"}} onClick={handleAddOption}>Add</button>  

     
      {options.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Options</h3>
          {options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="pollOption"
                  value={index}
                  checked={selectedOption === index} 
                  onChange={() => setSelectedOption(index)}
                />
                {option}
              </label>
            </div>
          ))}

          <button onClick={handleVote} style={{ marginTop: "10px",border: "1px solid black" }}>
            Vote
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default PollSurvey;