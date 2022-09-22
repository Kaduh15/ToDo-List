const express = require('express');
require('express-async-errors');

const userRouter = require('./routes/userRouter')
const errorMiddleware = require('./middlewares/errorMiddleware');
const userCreateValidation = require('./middlewares/userCreateValidation');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.use('/user', userRouter);

app.use(errorMiddleware);

module.exports = app;
