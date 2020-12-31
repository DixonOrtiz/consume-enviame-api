const fs = require('fs');
const axios = require('axios');
const { ENDPOINT, API_KEY } = require('./env');
const body = require('../body.json');

const consumeApi = async () => {
  try {
    const response = await axios.post(
      ENDPOINT,
      {
        body,
      },
      {
        headers: {
          'api-key': `${API_KEY}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.log('Error while fetching data:', error);
  }
};

const createFile = async () => {
  const data = await consumeApi();

  fs.writeFile(
    './src/data/response.json',
    JSON.stringify(data, null, 4),
    'utf8',
    function (err) {
      if (err) {
        console.log('Error while writing json file:', error);
      }

      console.log('JSON file has been created in /src/data/response.js!');
    }
  );
};

createFile();
