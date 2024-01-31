const mongoose = require('mongoose');
const Joi = require('joi');


// Schema for gener
const Gener = mongoose.model('Gener', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25,
    },
}));

// validate gener
function validateGener(gener) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(gener, schema);
}

exports.Gener = Gener;
exports.validate = validateGener;