import React, { useState, useEffect } from "react";
import "./Selector.css"; // Import CSS file for component styling
import SelectedKeyphrases from "../SelectedKeyphrases/SelectedKeyphrases";

const Selector = ({ topKeyphrases }) => {
  const [selectedKeyphrase1, setSelectedKeyphrase1] = useState("");
  const [selectedKeyphrase2, setSelectedKeyphrase2] = useState("");
  const [selectedKeyphrases, setSelectedKeyphrases] = useState([]);

  const handleSelectChange1 = (event) => {
    setSelectedKeyphrase1(event.target.value);
    // Reset the selection in selector 2 if the same keyphrase is selected in selector 1
    if (event.target.value === selectedKeyphrase2) {
      setSelectedKeyphrase2("");
    }
  };

  const handleSelectChange2 = (event) => {
    setSelectedKeyphrase2(event.target.value);
    // Reset the selection in selector 1 if the same keyphrase is selected in selector 2
    if (event.target.value === selectedKeyphrase1) {
      setSelectedKeyphrase1("");
    }
  };

  useEffect(() => {
    const updatedSelectedKeyphrases = [];
    if (selectedKeyphrase1) {
      updatedSelectedKeyphrases.push(selectedKeyphrase1);
    }
    if (selectedKeyphrase2) {
      updatedSelectedKeyphrases.push(selectedKeyphrase2);
    }
    setSelectedKeyphrases(updatedSelectedKeyphrases);
  }, [selectedKeyphrase1, selectedKeyphrase2]);

  return (
    <div className="selector-container">
      <div className="selectors-column">
        <div className="selector-wrapper">
          <h3>Selector 1:</h3>
          <select value={selectedKeyphrase1} onChange={handleSelectChange1}>
            <option value="">Select...</option>
            {topKeyphrases.map((keyphrase, index) => (
              <option key={index} value={keyphrase}>
                {keyphrase}
              </option>
            ))}
          </select>
        </div>

        <div className="selector-wrapper">
          <h3>Selector 2:</h3>
          <select value={selectedKeyphrase2} onChange={handleSelectChange2}>
            <option value="">Select...</option>
            {topKeyphrases.map((keyphrase, index) => (
              <option key={index} value={keyphrase}>
                {keyphrase}
              </option>
            ))}
          </select>
        </div>

        <SelectedKeyphrases selectedKeyphrases={selectedKeyphrases} />
      </div>
    </div>
  );
};

export default Selector;
