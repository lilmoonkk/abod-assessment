const express = require('express');
const app = express();
const userRouter = require('./routers/user')
const port = 5000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});