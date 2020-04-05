const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'question is required']
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    }]
}, { collection: 'tests' });


module.exports = User = mongoose.model('test', questionSchema);