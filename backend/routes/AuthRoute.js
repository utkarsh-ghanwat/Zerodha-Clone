const express = require("express");

const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/Authmiddlewares");

const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login)
router.post("/verify", userVerification); // or router.get("/", userVerification)

module.exports = router;