const PORT = 8080;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Express con HTML!</h1>");
});
app.listen(PORT, console.log(`listening on port ${PORT}`));
