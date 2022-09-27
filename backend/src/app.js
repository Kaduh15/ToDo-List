const express = require('express');
var cors = require('cors')
require('express-async-errors');

const userRouter = require('./routes/userRouter')
const taskRouter = require('./routes/taskRouter')
const loginRouter = require('./routes/loginRouter')
const errorMiddleware = require('./middlewares/errorMiddleware');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.use('/user', userRouter);

app.use('/task', taskRouter)

app.use('/login', loginRouter);

app.use(errorMiddleware);

module.exports = app;
