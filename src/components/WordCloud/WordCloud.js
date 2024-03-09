import React from "react";
import Wordcloud from "react-wordcloud";
import { debounce } from "../../utils";
import "./WordCloud.css"; // Import the CSS file for styling

const WordCloud = ({ allKeyphrases }) => {
  const generateWordcloudData = (keyphrases) => {
    // Count the frequency of each keyphrase
    const frequencyMap = {};
    keyphrases.forEach((keyphrase) => {
      frequencyMap[keyphrase] = (frequencyMap[keyphrase] || 0) + 1;
    });

    // Convert frequency map to wordcloud data format
    const wordcloudData = Object.keys(frequencyMap).map((key) => ({
      text: key,
      value: frequencyMap[key],
    }));

    return wordcloudData;
  };

  const wordcloudData = generateWordcloudData(allKeyphrases);

  return (
    <div className="wordcloud-container">
      <h3>All Keyphrases Word Cloud</h3>
      <Wordcloud
        words={wordcloudData}
        options={{
          enableTooltip: true,
          deterministic: false,
          fontFamily: "impact",
          fontSizes: [20, 60],
          fontStyle: "normal",
          fontWeight: "bold",
          padding: 1,
          rotations: 3,
          rotationAngles: [0],
          scale: "sqrt",
          spiral: "archimedean",
          transitionDuration: 500,
          colors: ["#666666", "#999999", "#CCCCCC", "#DDDDDD"],
        }}
        callbacks={{
          onWordClick: debounce(function (word) {
            // Handle word click event
            console.log("Clicked word:", word);
          }, 250),
          onWordMouseOver: debounce(function (word) {
            // Handle word mouseover event
            console.log("Hovered word:", word);
          }, 250),
        }}
      />
    </div>
  );
};

export default WordCloud;
