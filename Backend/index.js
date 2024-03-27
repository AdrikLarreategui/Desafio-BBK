const express = require("express");
const app = express();
const { dbConnection } = require("./config/config");
const { typeError } = require("./middlewares/errors");

require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

dbConnection();
app.use("/users", require("./routes/users"));
app.use("/talents", require("./routes/talents"));

app.use(typeError);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
