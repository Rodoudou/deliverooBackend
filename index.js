const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3100;

app.get("/", (req, res) => {
  res.json(["Gravity !", "2001 : A Space Odyssey"]);
});

app.listen(port, () => {
  console.log("Server listening port " + port);
});

app.all("*", function(req, res) {
  res.json({ message: "all routes" });
});
