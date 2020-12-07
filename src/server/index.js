var path = require("path");
const dotenv = require("dotenv");
var cors = require("cors");
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

// const mockAPIResponse = require("./mockAPI.js");

dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);
const app = express();

app.use(cors());

app.use(express.static("dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/analysis", async (req, res) => {
  const text = req.body.text;
  console.log("tex", text);

  const analysis = await axios.get(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}`
  );

  res.send({ data: analysis.data });
});
