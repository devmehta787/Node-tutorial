const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    // name: String,
    name: { type: String, required: true },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        // name: 'React Course',
        author: 'Dev',
        tags: ['node', 'backend'],
        isPublished: true,
    });
    try {
        await course.validate();
        // const result = await course.save();
        // console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }
}
createCourse();