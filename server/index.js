import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
const PORT = 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH = path.join(__dirname, "../public");

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
