const express = require("express");
require("dotenv").config();

const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const customerRoute = require("./routes/customer.routes");

app.use("/api/customer", customerRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
