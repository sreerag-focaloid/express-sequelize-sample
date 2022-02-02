const express = require("express");
const {
  createCustomer,
  listCustomers,
} = require("../controller/customer.controller");

const router = express.Router();

router.post("/", createCustomer);
router.get("/", listCustomers);

module.exports = router;
