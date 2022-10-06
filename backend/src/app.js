const express = require('express');
var cors = require('cors')
require('express-async-errors');

const userRouter = require('./routes/userRouter')
const taskRouter = require('./routes/taskRouter')
const loginRouter = require('./routes/loginRouter')
const authRouter = require('./routes/authRouter')
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://todo-list-kaduh15.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:true,
}));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.use('/login', loginRouter);

app.use('/auth', authRouter);

app.use('/user', userRouter);

app.use('/task', taskRouter);

app.use(errorMiddleware);

module.exports = app;
