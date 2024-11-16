const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/data", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(3000, () => console.log("Server running on port http://localhost:3000"));
