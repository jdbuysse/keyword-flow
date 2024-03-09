import React, { useState, useEffect } from "react";
import "./Selector.css";
import SelectedKeyphrases from "../SelectedKeyphrases/SelectedKeyphrases";

const Selector = ({
  topKeyphrases,
  selectedKeyphrases,
  setSelectedKeyphrases,
}) => {
  const [localSelectedKeyphrases, setLocalSelectedKeyphrases] = useState(
    Array(3).fill("")
  );

  const handleSelectChange = (index, event) => {
    const selectedValue = event.target.value;
    setLocalSelectedKeyphrases((prevSelectedKeyphrases) => {
      const updatedSelectedKeyphrases = [...prevSelectedKeyphrases];
      updatedSelectedKeyphrases[index] = selectedValue;
      return updatedSelectedKeyphrases;
    });
  };

  useEffect(() => {
    const updatedSelectedKeyphrases = localSelectedKeyphrases.filter(
      (keyphrase) => keyphrase !== ""
    );
    setSelectedKeyphrases(updatedSelectedKeyphrases);
  }, [localSelectedKeyphrases, setSelectedKeyphrases]);

  const isKeyphraseSelected = (keyphrase) => {
    return localSelectedKeyphrases.includes(keyphrase);
  };

  return (
    <div className="selector-container">
      <div className="selectors-column">
        <div className="selector-wrapper">
          {localSelectedKeyphrases.map((_, index) => (
            <React.Fragment key={index}>
              <h3>Term {index + 1}:</h3>
              <select
                value={localSelectedKeyphrases[index]}
                onChange={(event) => handleSelectChange(index, event)}
              >
                <option value="">Select...</option>
                {topKeyphrases.map((keyphrase, keyphraseIndex) => (
                  <option
                    key={keyphraseIndex}
                    value={keyphrase}
                    disabled={
                      isKeyphraseSelected(keyphrase) &&
                      localSelectedKeyphrases[index] !== keyphrase
                    }
                  >
                    {keyphrase}
                  </option>
                ))}
              </select>
            </React.Fragment>
          ))}
        </div>
        <SelectedKeyphrases selectedKeyphrases={selectedKeyphrases} />
      </div>
    </div>
  );
};

export default Selector;
