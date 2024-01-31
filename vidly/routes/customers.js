const { Customer, validate } = require('../models/customer');

const express = require('express');
const Joi = require('joi');
const router = express.Router();
const mongoose = require('mongoose');


// get all customers
router.get('/', async(req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

// get a customer with id
router.get('/:id', async(req, res) => {
    const customer = await Customer.findById(g => g.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send(`The customer with the given ID was not found`);
    res.send(customer);
});

// post a customer
router.post('/', async (req, res) => { 
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    // const customer = {
    //     id: customers.length + 1,
    //     name: req.body.name
    // };
    let customer = new Customer({ 
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone,
    });
    customer = await customer.save();
    res.send(customer);
});

// put a customer
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findByIdAndUpdate(req.params.id, { 
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone,
    }, {
        new: true
    });

    if (!customer) return res.status(404).send(`The customer with the given ID was not found`);

    res.send(customer);
});

// delete a customer
router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) return res.status(404).send(`The customer with the given ID was not found`);
    res.send(customer);
});




module.exports = router;