const express = require('express');
const Joi = require('joi');
const router = express.Router();
const mongoose = require('mongoose');


const genersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25,
    },
});

const Gener = mongoose.model('Gener', genersSchema);

// const geners = [
//     { id: 1, name: `Action` },
//     { id: 2, name: `Horror` },
//     { id: 3, name: `Romance` }
// ];

// get all geners
router.get('/', async(req, res) => {
    const geners = await Gener.find().sort('name');
    res.send(geners);
});


// get a gener with id
router.get('/:id', async(req, res) => {
    const gener = await Gener.findById(g => g.id === parseInt(req.params.id));
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);
    res.send(gener);
});

// post a gener
router.post('/', async (req, res) => { 
    const { error } = validateGener(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    // const gener = {
    //     id: geners.length + 1,
    //     name: req.body.name
    // };
    let gener = new Gener({ name: req.body.name });
    gener = await gener.save();
    res.send(gener);
});


// put a gener
router.put('/:id', async (req, res) => {
    const { error } = validateGener(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const gener = await Gener.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    });
    if(!gener) return res.status(404).send(`The genre with the given ID was not found`);

    // const gener = geners.find(g => g.id === parseInt(req.params.id));
    // if (!gener) return res.status(404).send(`The genre with the given ID was not found`);

    // const { error } = validateGener(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    // gener.name = req.body.name;
    res.send(gener);
});


// delete a gener
router.delete('/:id', async (req, res) => { 
    const gener = await Gener.findByIdAndRemove(req.params.id);
    if (!gener) return res.status(404).send(`The genre with the given ID was not found`);
    
    // const gener = geners.find(g => g.id === parseInt(req.params.id));
    // if (!gener) return res.status(404).send(`The genre with the given ID was not found`);

    // const index = geners.indexOf(gener);
    // geners.splice(index, 1);

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