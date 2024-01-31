const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const gener = require('./routes/gener')
const customers = require('./routes/customers')

mongoose.connect('mongodb://localhost:27017/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use('/api/geners', gener);
app.use('/api/customers', customers);

app.get('/', (req, res) => {
    res.send('Hello World');
});