const express = require("express");
const { createUser, listUsers } = require("../controller/user.controller");

const router = express.Router();

router.post("/create", createUser);
router.post("/list", listUsers);

module.exports = router;
