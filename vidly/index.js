const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const geners = [
    { id: 1, name: `Action` },
    { id: 2, name: `Horror` },
    { id: 3, name: `Romance` }
];

//validate the gener
function validateGener(gener) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(gener, schema);
}

// get all geners
app.get('/api/geners', (req, res) => {
    res.send(geners);
});


// get a gener with id
app.get('/api/geners/:id', (req, res) => {
    const gener = geners.find(g => g.id === parseInt(req.params.id));
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);
    res.send(gener);
});

// post a gener
app.post('/api/geners', (req, res) => { 
    const { error } = validateGener(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const gener = {
        id: geners.length + 1,
        name: req.body.name
    };
    geners.push(gener);
    res.send(geners);
});


// put a gener
app.put('/api/geners/:id', (req, res) => {
    const gener = geners.find(g => g.id === parseInt(req.params.id));
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);

    const { error } = validateGener(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    gener.name = req.body.name;
    res.send(geners);
});


// delete a gener
app.delete('/api/geners/:id', (req, res) => { 
    const gener = geners.find(g => g.id === parseInt(req.params.id));
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);

    const index = geners.indexOf(gener);
    geners.splice(index, 1);

    res.send(geners);
});

