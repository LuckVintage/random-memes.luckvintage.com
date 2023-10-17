const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();

// Read the list of image URLs from memes.txt and store them in an array
const memes = fs.readFileSync('memes.txt', 'utf-8').split('\n').filter(Boolean);

// Define a route to serve a random image
app.get('/', (req, res) => {
  // Generate a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * memes.length);

  // Get the URL of the randomly selected image
  const randomImageURL = memes[randomIndex];

  // Make a request to the image URL and pipe the response to the Express response
  request(randomImageURL).pipe(res);
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

