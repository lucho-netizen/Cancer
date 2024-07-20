const express = require("express");
const userController = require("../../controllers/user/userControllers.js");
const router = express.Router();

router.post("/login", userController.login);
router.post("/adduser", userController.addUser); // Ruta POST para agregar usuario
router.post("/google", userController.googleLogin); // Ruta POST para crear usuario con Google

module.exports = router;
