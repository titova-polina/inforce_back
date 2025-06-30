const express = require('express');
const cors = require('cors');
const http = require('http');

const productRouter = require('./src/routes/productRouter.js');

const { db } = require('./src/db/index.js');
const app = express();

app.use(
  cors({
    origin: [],
  })
);

app.use(express.json());

app.use('/api/product', productRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

const PORT = process.env.PORT;

const succesMessage = app.get('env') + ` server is running on port :${PORT}`;
const errorMessage = app.get('env') + ` server is not running. Error: `;

db.then(() => {
  http.createServer(app).listen(PORT, async () => {
    console.log(succesMessage);
  });
}).catch((err) => {
  console.log(errorMessage, err.message);
});
