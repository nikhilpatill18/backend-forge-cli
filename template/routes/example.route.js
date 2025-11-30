// template/routes/user.routes.js

const express = require("express");
const {
  createUser,
} = require("../controllers/example.controller");

const router = express.Router();

router.route("/")
  .post(createUser)

module.exports = router;
