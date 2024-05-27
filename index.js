// src/app.js
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');

const transactionRoutes = require('./routes/transactionRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const reportRoutes = require('./routes/reportRoutes');
const categoryRoutes = require('./routes/categoryRoutes');



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req,res) =>{
    res.send("welcome to Personal-finance-manag3r Api")
})
app.use('/api/auth', userRouter);
app.use('/api/transactions', transactionRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/categories', categoryRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});