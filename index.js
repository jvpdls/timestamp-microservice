const path = require("path");
const express = require("express");
const app = express();
const TimestampController = require("./controllers/TimestampController");
app.use(express.json());

// Setting the static files directory
app.use(express.static(path.join(__dirname, "public")));

// Redirect the homepage to the examples page
app.get("/", (req, res) => {
  res.redirect("/example.html");
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

// Default GET endpoint for handling undefined routes.
app.get("*", function (req, res) {
  res.status(404).json({ error: "Resource not found" });
});

// This was commented out to avoid conflicts when deplyoind on vercel
// app.listen(3000, () => {
//  console.log(
//    "The app is running locally. Visit http://localhost:3000/example to start."
//  );
//});

module.exports = app;