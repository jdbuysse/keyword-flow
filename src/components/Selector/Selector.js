import React, { useState, useEffect } from "react";
import "./Selector.css";
import SelectedKeyphrases from "../SelectedKeyphrases/SelectedKeyphrases";

const Selector = ({
  topKeyphrases,
  selectedKeyphrases,
  setSelectedKeyphrases,
}) => {
  const [selectedKeyphrase1, setSelectedKeyphrase1] = useState("");
  const [selectedKeyphrase2, setSelectedKeyphrase2] = useState("");
  const [selectedKeyphrase3, setSelectedKeyphrase3] = useState("");

  const handleSelectChange1 = (event) => {
    setSelectedKeyphrase1(event.target.value);
    if (
      event.target.value === selectedKeyphrase2 ||
      event.target.value === selectedKeyphrase3
    ) {
      setSelectedKeyphrase2("");
      setSelectedKeyphrase3("");
    }
  };

  const handleSelectChange2 = (event) => {
    setSelectedKeyphrase2(event.target.value);
    if (
      event.target.value === selectedKeyphrase1 ||
      event.target.value === selectedKeyphrase3
    ) {
      setSelectedKeyphrase1("");
      setSelectedKeyphrase3("");
    }
  };

  const handleSelectChange3 = (event) => {
    setSelectedKeyphrase3(event.target.value);
    if (
      event.target.value === selectedKeyphrase1 ||
      event.target.value === selectedKeyphrase2
    ) {
      setSelectedKeyphrase1("");
      setSelectedKeyphrase2("");
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
    if (selectedKeyphrase3) {
      updatedSelectedKeyphrases.push(selectedKeyphrase3);
    }
    setSelectedKeyphrases(updatedSelectedKeyphrases);
  }, [
    selectedKeyphrase1,
    selectedKeyphrase2,
    selectedKeyphrase3,
    setSelectedKeyphrases,
  ]);

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
          <h3>Selector 2:</h3>
          <select value={selectedKeyphrase2} onChange={handleSelectChange2}>
            <option value="">Select...</option>
            {topKeyphrases.map((keyphrase, index) => (
              <option key={index} value={keyphrase}>
                {keyphrase}
              </option>
            ))}
          </select>
          <h3>Selector 3:</h3>
          <select value={selectedKeyphrase3} onChange={handleSelectChange3}>
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
