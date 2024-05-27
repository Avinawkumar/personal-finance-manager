// Category-wise Expense Tracking
// functionality to track expenses by category:

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCategory = async (req, res) => {
    const { name } = req.body;

    const category = await prisma.category.create({
        data: { name }
    });
    res.status(201).json(category);
};

const getCategories = async (req, res) => {
    const categories = await prisma.category.findMany();
    res.json(categories);
};

const getCategoryExpenses = async (req, res) => {
    const userId = req.user.userId;
    const { category } = req.params;

    const transactions = await prisma.transaction.findMany({
        where: { userId, category, type: 'expense' }
    });

    const totalExpense = transactions.reduce((sum, t) => sum + t.amount, 0);
    res.json({ category, totalExpense });
};

module.exports = { createCategory, getCategories, getCategoryExpenses };
