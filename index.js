/**
 * Express server for timestamp microservice.
 * @module index
 */
const express = require("express");
const app = express();
const TimestampController = require("./controllers/TimestampController");
app.use(express.json());

/**
 * GET endpoint to retrieve timestamp information.
 * @name GET/api/:value
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing timestamp information.
 */
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

/**
 * GET endpoint to serve an example HTML file.
 * @name GET/example
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - HTML file as response.
 */
app.get("/example", function (req, res) {
  res.sendFile("./views/example.html", { root: __dirname });
});

/**
 * Default GET endpoint for handling undefined routes.
 * @name GET/*
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating resource not found.
 */
app.get("*", function (req, res) {
  res.status(404).json({ error: "Resource not found" });
});

/**
 * Start the Express server on port 3000.
 * @name listen
 * @function
 * @param {number} port - Port number to listen on.
 * @param {Function} callback - Callback function to be executed when the server starts listening.
 */
app.listen(3000, () => {
  console.log("The app is running locally...");
});
