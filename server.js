const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const kritikRoute = require("./routes/kritikroute");
app.use("/api/kritik", kritikRoute);

// Tes route
app.get("/", (req, res) => {
  res.send("Backend berjalan!");
});

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server berjalan di port", PORT);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));
