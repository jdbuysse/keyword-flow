import React, { useState } from "react";
import "./SankeyChart.css";
import { ResponsiveSankey } from "@nivo/sankey";

const formatSankeyChartData = (extractedData, selectedKeyphrases) => {
  const source = selectedKeyphrases[0];
  const target = selectedKeyphrases[1];
  const third = selectedKeyphrases[2];

  const occurrences = {
    [`${source}_${target}`]: 0,
    [`${source}_${third}`]: 0,
    [`${source}_${target}_${third}`]: 0,
  };

  extractedData.forEach((entry) => {
    const keyphrases = entry.keyphrase.split(" ");

    // Check if "skaters" and "skateboard" coexist but "kickflip" does not
    if (
      keyphrases.includes(source) &&
      keyphrases.includes(target) &&
      !keyphrases.includes(third)
    ) {
      occurrences[`${source}_${target}`]++;
    }

    // Check if "skaters" and "kickflip" coexist but "skateboard" does not
    if (
      keyphrases.includes(source) &&
      keyphrases.includes(third) &&
      !keyphrases.includes(target)
    ) {
      occurrences[`${source}_${third}`]++;
    }

    // Check if all three words coexist
    if (
      keyphrases.includes(source) &&
      keyphrases.includes(target) &&
      keyphrases.includes(third)
    ) {
      occurrences[`${source}_${target}_${third}`]++;
    }
  });

  return {
    nodes: [{ id: source }, { id: target }, { id: third }],
    links: [
      {
        source: source,
        target: target,
        value: occurrences[`${source}_${target}`],
      },
      {
        source: source,
        target: third,
        value: occurrences[`${source}_${third}`],
      },
      {
        source: target,
        target: third,
        value: occurrences[`${source}_${target}_${third}`],
      },
    ],
  };
};

const SankeyChart = ({ extractedData, selectedKeyphrases }) => {
  const sData = formatSankeyChartData(extractedData, selectedKeyphrases);
  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
  };

  const filteredData = clickedLink
    ? extractedData.filter((entry) => {
        const keyphrases = entry.keyphrase.split(" ");
        return (
          keyphrases.includes(clickedLink.source.id) &&
          keyphrases.includes(clickedLink.target.id)
        );
      })
    : [];
  return (
    <div>
      <h3>
        Click on one of the linkages in the Sankey chart below to reveal
        document co-occurrences
      </h3>
      <div style={{ height: "500px" }}>
        <ResponsiveSankey
          data={sData}
          onClick={handleLinkClick}
          margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
          align="justify"
          colors={{ scheme: "category10" }}
          nodeOpacity={1}
          nodeThickness={18}
          nodeInnerPadding={3}
          nodeSpacing={24}
          nodeBorderWidth={0}
          nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
          linkOpacity={0.5}
          linkHoverOthersOpacity={0.1}
          enableLinkGradient={true}
          labelPosition="outside"
          labelOrientation="horizontal"
          labelPadding={16}
          labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
          animate={true}
          motionStiffness={140}
          motionDamping={13}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 130,
              itemWidth: 100,
              itemHeight: 14,
              itemDirection: "right-to-left",
              itemsSpacing: 2,
              itemTextColor: "#999",
              symbolSize: 14,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
      {clickedLink && (
        <div className="link-info">
          <h4>Link Information</h4>
          <p>
            Source: <span className="link-source">{clickedLink.source.id}</span>
          </p>
          <p>
            Target: <span className="link-target">{clickedLink.target.id}</span>
          </p>
          <p>
            Value: <span className="link-value">{clickedLink.value}</span>
          </p>
          <h4>Related Texts:</h4>
          <div className="related-texts-container">
            {filteredData.map((entry, index) => (
              <div key={index} className="related-text-item">
                <div className="entry-header">
                  <p className="entry-title">{entry.title}</p>
                  <p className="entry-date">{entry.datePublished}</p>
                </div>
                <p className="entry-keyphrase">Keyphrase: {entry.keyphrase}</p>
                {/* Display other relevant information */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SankeyChart;
