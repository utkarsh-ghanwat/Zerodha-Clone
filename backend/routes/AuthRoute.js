const express = require("express");

const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/Authmiddlewares");

const router = require("express").Router();

router.post("/api/signup", Signup);
router.post('/api/login', Login)
router.post("/api/verify", userVerification); // or router.get("/", userVerification)

module.exports = router;