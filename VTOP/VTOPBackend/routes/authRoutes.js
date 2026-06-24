const express = require("express");
const router = express.Router();
const {loginStudent, loginParent, loginEmployee, loginAlumni} = require('../controller/authController');

router.post('/login/student', loginStudent);
router.post('/login/employee', loginEmployee);
router.post('/login/parent', loginParent);
router.post('/login/alumni', loginAlumni);

module.exports = router;