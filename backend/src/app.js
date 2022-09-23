const express = require('express');
require('express-async-errors');

const userRouter = require('./routes/userRouter')
const taskRouter = require('./routes/taskRouter')
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.use('/user', userRouter);

app.use('/task', taskRouter)

app.use(errorMiddleware);

module.exports = app;
