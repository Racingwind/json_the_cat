const request = require('request');

const input = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

request(url, (error, response, body) => {
  if (error) {
    throw err;
  }

  console.log("Page fetch status: ", response && response.statusCode);
  const data = JSON.parse(body);
  console.log(data[0].description);
});