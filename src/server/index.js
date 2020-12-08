const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);
const app = express();

app.use(cors());

app.use(express.static("dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/analysis", async (req, res) => {
  //text is the input that the client enters, which will be used as in fetch string
  const text = req.body.text;

  const analysis = await axios.get(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}`
  );

  //sending results of analysis back to client
  res.send({ data: analysis.data });
});
