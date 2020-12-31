require('dotenv').config();

const ENDPOINT = process.env.ENDPOINT;
if (ENDPOINT === undefined) {
  console.error('[error] No ENDPOINT environment variable in .env file');
  process.exit(1);
}

const API_KEY = process.env.API_KEY;
if (API_KEY === undefined) {
  console.error('[error] No API_KEY environment variable in .env file');
  process.exit(1);
}

module.exports = {
  ENDPOINT,
  API_KEY,
};
