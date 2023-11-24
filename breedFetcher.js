const request = require('request');

const input = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

request(url, (error, response, body) => {
  if (error) {
    throw error;
  }
  console.log("Page fetch status: ", response && response.statusCode);
  if (response.statusCode !== 200) {
    console.log("An error has occured while querying the server.");
    return;
  }
  if (body === "[]") {
    console.log("Cat breed not found.");
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});