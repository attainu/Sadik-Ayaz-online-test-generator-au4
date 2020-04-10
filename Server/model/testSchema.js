const mongoose = require('mongoose');
const moment = require('moment');

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'question is required']
    },
    time: {
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    }]
}, { collection: 'tests' });


module.exports = User = mongoose.model('tests', questionSchema);