const User = require("../models/user");

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email) {
    return res.status(400).json({ message: "Please Enter Email" });
  }

  if (!password) {
    return res.status(400).json({ message: "Please Enter Password" });
  }

  const newUser = new User({ email: email, password: password });
  const savedUser = await newUser.save();
  if (savedUser) {
    res.status(200).json({ data: savedUser });
  }

  if (!savedUser) {
    res.status(400).json({ message: "Error Occured" });
  }
};

exports.listUsers = async (req, res) => {
  const user = await User.find();
  if (user) {
    res.status(200).json({ data: user });
  }
  if (!user) {
    res.status(400).json({ message: "Error Occured" });
  }
};
