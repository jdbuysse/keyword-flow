import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";

const SankeyChart = ({ extractedData }) => {
  const source = "skaters";
  const target = "skateboard";
  const third = "kickflip";

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

  const sData = {
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

  return (
    <div style={{ height: "500px" }}>
      <ResponsiveSankey
        data={sData}
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
  );
};

export default SankeyChart;
