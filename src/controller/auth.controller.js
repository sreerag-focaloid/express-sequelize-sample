const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  const isUserExist = await User.findOne({ where: { email } }).catch((err) => {
    console.log("err", err);
  });
  if (isUserExist) {
    return res.status(400).res.json({ message: "Email already registered" });
  }
  const salt = await bcrypt.genSalt(10);
  const hash_password = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    password: hash_password,
    role,
  });

  const savedUser = user.save();

  if (savedUser)
    return res.status(200).json({
      message: "User Created Successfully",
      user: { firstName, lastName, email, role },
    });
  if (!savedUser) return res.status(400).json({ message: "Error Occurred" });
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const userData = await User.findOne({ where: { email } });

  if (!userData)
    return res.status(400).json({ message: `Email doesn't exist` });

  const isPasswordCorrect = await bcrypt.compare(password, userData.password);
  if (!isPasswordCorrect)
    return res.status(200).json({ message: "Password is Incorrect" });

  const token = jwt.sign(
    { id: userData.id, role: userData.role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.TOKEN_EXPIRY,
    }
  );

  res.status(200).json({ token, userData });
};
