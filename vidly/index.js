const Joi = require('joi');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const gener = require('./routes/gener')

app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use('/api/geners', gener);

app.get('/', (req, res) => {
    res.send('Hello World');
});