
// CRUD Operations for Income and Expenses


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTransaction = async (req, res) => {
    const { type, amount, category } = req.body;
    const userId = req.user.userId;

    const transaction = await prisma.transaction.create({
        data: {
            type,
            amount,
            category,
            userId
        }
    });
    res.status(201).json( transaction);
};

const getTransactions = async (req, res) => {
    const userId = req.user.userId;
    const transactions = await prisma.transaction.findMany({
        where: { userId }
    });
    res.json(transactions);
};

const updateTransaction = async (req, res) => {
    const { id } = req.params;
    const { type, amount, category } = req.body;

    const transaction = await prisma.transaction.update({
        where: { id },
        data: { type, amount, category }
    });
    res.json(transaction);
};

const deleteTransaction = async (req, res) => {
    const { id } = req.params;

    await prisma.transaction.delete({
        where: { id }
    });
    res.sendStatus(204).json({ message: 'Transaction deleted succesfuly' });;
};

module.exports = { createTransaction, getTransactions, updateTransaction, deleteTransaction };
