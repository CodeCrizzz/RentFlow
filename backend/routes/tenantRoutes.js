const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/dashboard', authMiddleware, tenantController.getDashboard);
router.get('/profile', authMiddleware, tenantController.getProfile);

module.exports = router;
