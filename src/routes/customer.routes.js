const express = require("express");
const {
  createCustomer,
  listCustomers,
  listCustomerByName,
} = require("../controller/customer.controller");

const router = express.Router();

router.post("/", createCustomer);
router.get("/", listCustomers);
router.get("/name", listCustomerByName);

module.exports = router;
