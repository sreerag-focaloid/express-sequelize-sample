const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const customerRoutes = require("./routes/customer.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/api/auth", authRoutes);
app.use("/api/customer", customerRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
