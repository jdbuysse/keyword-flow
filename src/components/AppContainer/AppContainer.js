import React, { useState, useEffect } from "react";
import Selector from "../Selector/Selector";
import WordCloud from "../WordCloud/WordCloud";
import SankeyChart from "../SankeyChart/SankeyChart";
import "./AppContainer.css";

function AppContainer() {
  const [topKeyphrases, setTopKeyphrases] = useState([]);
  const [allKeyphrases, setAllKeyphrases] = useState([]);
  const [selectedKeyphrases, setSelectedKeyphrases] = useState([]);
  const [extractedData, setExtractedData] = useState([]);

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
        setExtractedData(data.extractedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="AppContainer">
      <header className="AppContainer-header">
        <div className="selector-wordcloud-container">
          <Selector
            topKeyphrases={topKeyphrases}
            selectedKeyphrases={selectedKeyphrases}
            setSelectedKeyphrases={setSelectedKeyphrases}
          />
          <WordCloud allKeyphrases={allKeyphrases} />
        </div>
        {extractedData.length && <SankeyChart extractedData={extractedData} />}
      </header>
    </div>
  );
}

export default AppContainer;
