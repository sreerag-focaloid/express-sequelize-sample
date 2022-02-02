const Customer = require("../models/customer");

exports.createCustomer = async (req, res) => {
  const { name, phoneNumber } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Please Enter Name" });
  }

  if (!phoneNumber) {
    return res.status(400).json({ message: "Please Enter Phone Number" });
  }

  const newCustomer = new Customer({ name, phoneNumber });
  const savedCustomer = await newCustomer.save();
  if (savedCustomer) {
    res.status(200).json({ data: savedCustomer });
  }

  if (!savedCustomer) {
    res.status(400).json({ message: "Error Occured" });
  }
};

exports.listCustomers = async (req, res) => {
  const customer = await Customer.findAll();
  if (customer) {
    res.status(200).json({ data: customer });
  }
  if (!customer) {
    res.status(400).json({ message: "Error Occured" });
  }
};
