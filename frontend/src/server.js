import { useSelector } from "react-redux";
const express = require("express");
const fs = require("fs");
const app = express();
const multer = require("multer");
const PORT = 3001;

const mode = useSelector()

app.use(express.json());

const storage = multer.diskStorage({
  destination: "public/media",
});

// endpoint to handle form submissions
app.post("/submit", (req, res) => {
  const formData = req.body;

  // Read existing JSON data from file
  let jsonData = [];
  try {
    jsonData = JSON.parse(fs.readFileSync("/db/data.json"));
  } catch (e) {
    console.error("Error reading JSON file", e);
  }
  jsonData.push(formData);

  // write updated array back to json file
  fs.writeFileSync("/db/data.json", JSON.stringify(jsonData, null, 2));

  res.status(200).json({ message: "Data added successfully" });
});

app.listen(PORT, () => {
  console.log("Server is running pon port " + PORT);
});

// add new form data to array
