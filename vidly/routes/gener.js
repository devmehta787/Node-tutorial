const express = require('express');
const router = express.Router();



const geners = [
    { id: 1, name: `Action` },
    { id: 2, name: `Horror` },
    { id: 3, name: `Romance` }
];

// get all geners
router.get('/', (req, res) => {
    res.send(geners);
});


// get a gener with id
router.get('/:id', (req, res) => {
    const gener = geners.find(g => g.id === parseInt(req.params.id));
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);
    res.send(gener);
});

// post a gener
router.post('/', (req, res) => { 
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
router.put('/:id', (req, res) => {
    const gener = geners.find(g => g.id === parseInt(req.params.id));
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);

    const { error } = validateGener(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    gener.name = req.body.name;
    res.send(geners);
});


// delete a gener
router.delete('/:id', (req, res) => { 
    const gener = geners.find(g => g.id === parseInt(req.params.id));
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);

    const index = geners.indexOf(gener);
    geners.splice(index, 1);

    res.send(geners);
});



//validate the gener
function validateGener(gener) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(gener, schema);
}


module.exports = router;