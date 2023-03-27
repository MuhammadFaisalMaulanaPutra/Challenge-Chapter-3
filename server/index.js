const express = require("express");
const app = express();
const path = require("path");
const PATH = path.join(__dirname, "../public/");
const PORT = 8000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(PATH, "landing-page.html"));
});

app.get("/cars", (req, res) => {
  res.sendFile(path.join(PATH, "search-cars.html"));
});

app.listen(PORT, () => {
  console.log(`Server sudah berjalan, silahkan buka http://localhost:${PORT}`);
});
