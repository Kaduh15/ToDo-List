const express = require('express');

const userRouter = require('./Routes/userRouter')

const app = express();
app.use(express.json())

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.use('/user', userRouter)

module.exports = app;
