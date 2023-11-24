const request = require('request');

const input = process.argv.slice(2);
const url = `https://api.thecatapii.com/v1/breeds/search?q=${input}`;

request(url, (error, response, body) => {
  if (error) {
    throw error;
  }
  console.log("Page fetch status: ", response && response.statusCode);
  if (body === "[]") {
    console.log("Cat breed not found");
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});