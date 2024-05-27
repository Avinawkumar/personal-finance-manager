
const express = require('express');
const { getMonthlyReport } = require('../controllers/reportController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/:month/:year', authenticateToken, getMonthlyReport);

module.exports = router;
