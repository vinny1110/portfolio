const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API route (optional)
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Vinay Sekhar",
    role: "Node.js Backend Developer",
    skills: ["JavaScript", "Node.js", "SQL", "MongoDB"],
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});