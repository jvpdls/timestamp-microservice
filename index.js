const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const TimestampController = require("./controllers/TimestampController");
app.use(express.json());

// Gets the robots.txt file
app.get("/robots.txt", function (req, res) {
  res.setHeader("Content-Type", "text/plain");

  const filePath = path.join(__dirname, "robots.txt");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 200;
      res.end("User-agent: *\nDisallow: /");
    } else {
      res.end(data);
    }
  });
});

// Redirect the homepage to the examples page
app.get("/", (req, res) => {
  res.redirect("/example");
});

// GET endpoint to retrieve timestamp information.
app.get("/api/:value", (req, res) => {
  const value = req.params.value;
  const timestampController = new TimestampController();

  try {
    const response = timestampController.getResponse(value);
    res.json(response);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

// GET endpoint to serve an example HTML file.
app.get("/example", function (req, res) {
  res.sendFile("./views/example.html", { root: __dirname });
});

// Default GET endpoint for handling undefined routes.
app.get("*", function (req, res) {
  res.status(404).json({ error: "Resource not found" });
});

// Start the Express server on port 3000.
app.listen(3000, () => {
  console.log(
    "The app is running locally. Visit http://localhost:3000/example to start."
  );
});

module.exports = app;
