const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    // name: String,
    // data type, required, validation
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
    },
    author: String,
    // tags: [String],
    
    // custom validation
    
    tags: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'A course should have at least one tag.',
        },  
    },
    
    // async validation
    
    tags: {
        type: Array,
        // validate: {
        //     validator: function (v) {
        //         setTimeout(() => {
        //             return new Promise((resolve, reject) => {
        //                 const result = v && v.length > 0;
        //                 return result;
        //             }, 4000);
        //         })
        //     },
        //     message: 'A course should have at least one tag.',
        // }
        validate: function(v) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    if (!result) {
                        reject(new Error());
                    }
                }, 4000);
            });
        },
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; }
    },
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Course Abcd',
        category: 'web',
        author: 'Dev',
        tags: [],
        isPublished: true,
        price:10
    });
    try {
        await course.validate();
        const result = await course.save();
        console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }
}
createCourse();