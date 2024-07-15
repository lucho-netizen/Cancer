const express = require("express");
const userController = require("../controllers/user/userControllers.js");
const router = express.Router();

router.post("/login", userController.login);
// router.get("/patients", userController.getPatients);
// router.post("/adduser", userController.addUser); // Ruta POST para agregar usuario
router.post("/api/users/google", userController.createUserWithGoogle); // Ruta POST para crear usuario con Google

module.exports = router;
