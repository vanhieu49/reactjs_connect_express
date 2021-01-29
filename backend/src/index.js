const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 9000;

app.use(morgan("combined"));
app.use(cors());

app.get("/helloword", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
