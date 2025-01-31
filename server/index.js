require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

//Import routes
const waldoRoutes = require("./routes/waldoRoutes");

app.use(cors());

//Middleware
app.use(express.json());

//Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//App uses
app.use("/api/waldo", waldoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
