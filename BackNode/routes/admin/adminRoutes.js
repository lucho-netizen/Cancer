const express = require("express");
const adminController = require('../../controllers/admin/adminControllers');
const router = express.Router();

router.post("/loginadmin", adminController.loginAdmin);
router.get("/patients", adminController.getPatients);

module.exports = router;
