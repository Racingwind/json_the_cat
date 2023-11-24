const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // if (error) {
    //   throw error;
    // }
    // console.log("Page fetch status: ", response && response.statusCode);
    // if (response.statusCode !== 200) {
    //   console.log("An error has occured while querying the server.");
    //   return;
    // }
    // if (body === "[]") {
    //   console.log("Cat breed not found.");
    //   return;
    // }
    let desc = null;
    console.log(response.statusCode);
    if (body !== "[]") {
      const data = JSON.parse(body);
      desc = data[0].description;
      console.log(desc);
    } else {
      error = "Breed not found.";
    }
    callback(error, desc);
  });
};

module.exports = {fetchBreedDescription};