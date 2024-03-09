import React from "react";
import "./SelectedKeyphrases.css"; // Import CSS file for component styling

const SelectedKeyphrases = ({ selectedKeyphrases }) => {
  return (
    <div className="selected-keyphrases-container">
      <h3>Selected Keyphrases:</h3>
      <ul>
        {selectedKeyphrases.map((keyphrase, index) => (
          <li key={index}>{keyphrase}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedKeyphrases;
