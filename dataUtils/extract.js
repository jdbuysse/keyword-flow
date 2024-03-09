const fs = require("fs");
const natural = require("natural");

// Input and output file paths
// EDIT FILENAME to read in new dataset
const inputFile = "./constellateDatasets/skate_full_metadata.jsonl";
const outputFile = "../public/output.json";

// Read JSONL by line
const data = fs.readFileSync(inputFile, "utf8").split("\n");

// ExtractedData trims to certain key fields
const extractedData = [];
let allKeyphrases = [];

data.forEach((line) => {
  if (line.trim() !== "") {
    const entry = JSON.parse(line);

    const { id, datePublished, keyphrase, sourceCategory, tdmCategory, title } =
      entry;

    // Extract keyphrase from the array if it exists and join them into a single string
    const keyphraseString = Array.isArray(keyphrase) ? keyphrase.join(" ") : "";

    extractedData.push({
      id,
      datePublished,
      keyphrase: keyphraseString,
      sourceCategory,
      tdmCategory,
      title,
    });

    // Collect all keyphrases from full dataset into one array
    allKeyphrases = allKeyphrases.concat(
      Array.isArray(keyphrase) ? keyphrase : []
    );
  }
});

// Join all keyphrases into one long string
const allKeyphrasesString = allKeyphrases.join(" ");

// Tokenize the keyphrases
const tokenizer = new natural.WordTokenizer();
const tokenizedKeyphrases = tokenizer.tokenize(allKeyphrasesString);

// Calculate TF-IDF for the tokenized keyphrases
const tfidf = new natural.TfIdf();
tfidf.addDocument(tokenizedKeyphrases);

// Get TF-IDF scores for each keyphrase
const keyphrasesTFIDF = {};
tokenizedKeyphrases.forEach((keyphrase) => {
  const tfidfScore = tfidf.tfidf(keyphrase, 0);
  keyphrasesTFIDF[keyphrase] = tfidfScore;
});

// Convert keyphrasesTFIDF object into an array of objects sorted by TF-IDF score in descending order
const sortedKeyphrasesTFIDF = Object.entries(keyphrasesTFIDF)
  .map(([keyphrase, tfidfScore]) => ({ keyphrase, tfidfScore }))
  .sort((a, b) => b.tfidfScore - a.tfidfScore);

// Write the extracted data, aggregated keyphrases, and sorted TF-IDF scores to a new JSON file
fs.writeFileSync(
  outputFile,
  JSON.stringify(
    {
      extractedData,
      allKeyphrases: allKeyphrasesString,
      keyphrasesTFIDF: sortedKeyphrasesTFIDF,
    },
    null,
    2
  )
);

console.log(
  "Extraction complete! check the /public/ folder for your output",
  outputFile
);
