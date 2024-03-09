import React, { useState, useEffect } from "react";
import Selector from "../Selector/Selector";
import WordCloud from "../WordCloud/WordCloud";
import "./AppContainer.css";

function AppContainer() {
  const [topKeyphrases, setTopKeyphrases] = useState([]);
  const [allKeyphrases, setAllKeyphrases] = useState([]);

  useEffect(() => {
    fetch("/output.json")
      .then((response) => response.json())
      .then((data) => {
        const { keyphrasesTFIDF } = data;
        const top10 = keyphrasesTFIDF
          .slice(0, 10)
          .map((item) => item.keyphrase);
        setTopKeyphrases(top10);
        const allKeyphrases = keyphrasesTFIDF.map((item) => item.keyphrase);
        setAllKeyphrases(allKeyphrases);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="AppContainer">
      <header className="AppContainer-header">
        <Selector topKeyphrases={topKeyphrases} />
        <WordCloud allKeyphrases={allKeyphrases} />
      </header>
    </div>
  );
}

export default AppContainer;
