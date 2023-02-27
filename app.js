const express = require('express');
const cors = require('cors');
const Card = require('./models/cardModels');

// const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // parses the request body

app.use(cors());

app.use(express.static(`${__dirname}/public`));

//  creating data

app.post('/app/v1/cards', async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(200).json({
      status: 'success',
      data: card,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
});

// Getting data

app.get('/app/v1/cards', async (req, res) => {
  try {
    const data = await Card.find();

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
});

// Invalid route
app.all('*', (req, res) => {
  res.status(404).send({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
