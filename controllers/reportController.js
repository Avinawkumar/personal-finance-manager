// Monthly Financial Reports
//  function to generate monthly financial reports:


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getMonthlyReport = async (req, res) => {
    const userId = req.user.userId;
    const { month, year } = req.params;

    const transactions = await prisma.transaction.findMany({
        where: {
            userId,
            date: {
                gte: new Date(`${year}-${month}-01`),
                lt: new Date(`${year}-${parseInt(month) + 1}-01`)
            }
        }
    });

    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

    res.json({ income, expenses, balance: income - expenses });
};

module.exports = { getMonthlyReport };
