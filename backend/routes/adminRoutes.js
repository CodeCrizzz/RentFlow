const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Add role check middleware here if needed
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied: Admin only' });
    }
};

router.get('/dashboard', authMiddleware, isAdmin, adminController.getDashboard);
router.get('/tenants', authMiddleware, isAdmin, adminController.getTenants);

module.exports = router;
