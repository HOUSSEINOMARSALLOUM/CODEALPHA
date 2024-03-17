const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
