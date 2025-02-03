const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const waldoRoutes = require("./routes/waldoRoutes");
const marioRoutes = require("./routes/marioRoutes");
const robotRoutes = require("./routes/robotRoutes");

app.use(cors());
app.use(express.json());

// Serve static files from the client's build directory
app.use(express.static(path.join(__dirname, "../client/dist")));

// Sample route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// App uses
app.use("/api/waldo", waldoRoutes);
app.use("/api/mario", marioRoutes);
app.use("/api/robot", robotRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
