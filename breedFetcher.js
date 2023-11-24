const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";

request(url, (error, response, body) => {
  if (error) {
    throw err;
  }
  console.log("Page fetch status: ", response && response.statusCode);
  console.log(typeof body);
  console.log(body);
});