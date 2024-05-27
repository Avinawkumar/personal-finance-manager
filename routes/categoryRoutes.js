
const express = require('express');
const { createCategory, getCategories, getCategoryExpenses } = require('../controllers/categoryController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, createCategory);
router.get('/', getCategories);
router.get('/:category/expenses', authenticateToken, getCategoryExpenses);

module.exports = router;
