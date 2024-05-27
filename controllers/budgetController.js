// Budget Management
// for handling budget creation and tracking:

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createBudget = async (req, res) => {
    const { category, amount, startDate, endDate } = req.body;
    const userId = req.user.userId;

    const budget = await prisma.budget.create({
        data: {
            category,
            amount,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            userId
        }
    });
    res.status(201).json(budget);
};

const getBudgets = async (req, res) => {
    const userId = req.user.userId;
    const budgets = await prisma.budget.findMany({
        where: { userId }
    });
    res.json(budgets);
};

module.exports = { createBudget, getBudgets };
