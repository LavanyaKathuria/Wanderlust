const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Create a simple route to render an EJS template
app.get("/", (req, res) => {
  res.render("test", { message: "EJS is working!" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});