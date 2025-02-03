const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

//Import routes
const waldoRoutes = require("./routes/waldoRoutes");
const marioRoutes = require("./routes/marioRoutes");
const robotRoutes = require("./routes/robotRoutes");

app.use(cors());

//Middleware
app.use(express.json());

//Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//App uses
app.use("/api/waldo", waldoRoutes);
app.use("/api/mario", marioRoutes);
app.use("/api/robot", robotRoutes);

// Serve static files from the client/dist directory
const clientBuildPath = path.join(__dirname, "../../client/dist"); // Adjust path for deployment
app.use(express.static(clientBuildPath));

// Handle all other routes with the frontend's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
  console.log("Static files served from:", clientBuildPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
