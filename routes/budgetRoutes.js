
const express = require('express');
const { createBudget, getBudgets } = require('../controllers/budgetController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, createBudget);
router.get('/', authenticateToken, getBudgets);

module.exports = router;
