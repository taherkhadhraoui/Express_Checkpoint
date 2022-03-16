const express = require("express");

const app = express();

const PORT = 5000;

// midelware
app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, (err) =>
  console.log(`server is up and running on port ${PORT}`)
);
