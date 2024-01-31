const mongoose = require('mongoose');
const Joi = require('joi');

const customersSchema = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25,
    },
    isGold: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25,
    },
}));



// validate customer
function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(25).required(),
        isGold: Joi.boolean(),
        phone: Joi.string().min(5).max(25).required(),
    };

    return Joi.validate(customer, schema);
}

exports.Customer = customersSchema;
exports.validate = validateCustomer;