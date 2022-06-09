const config = require("config");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL error: jwtPrivateKey is not defined.");
  process.exit(1);
}

app.use(cors());

require("./configs/dataBase"); //connect to db
require("./startup/routes")(app);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
