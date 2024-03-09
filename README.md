This is a create-react-app demo app for exploring keywords associated with documents in a Constellate dataset.

## Quickstart

### Starting the React app using example data included in repo
I used node 14.17.3 via NVM for package compatability. Would probably still work with another version if you use npm install --force

In the project directory, run:
`npm install`
`npm start`

### Using your own data

1. Create a constellate dataset and downloading 'Sample metadata, ngrams, full-text (JSONL)' or 'Metadata, ngrams, and full-text (JSONL)' (need to check that this works with the later when you look for better example data)
2. Unzip the downloaded dataset and drop it into /dataUtils/constellateDatasets
3. In extract.js, rename `const inputFile` to match the name of the file to extract
4. If you haven't already, run npm install
5. from the terminal in directory /dataUtils, run node extract.js
6. Restructured data will now appear in /public/, ready be used in the React application via mock query

## About the dataset extractor
This will work with constellate datasets that include x fields
then it will be saved in the public react folder so it can be fetched as if via query
does tfidf yadda yadda.

## Images
