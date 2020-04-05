const Question = require('../model/questionSchema');
const question = {};

question.create = async (request, response) => {
    try {

        const { question, options, answer, marks } = request.body
        let questions = {
            question,
            options,
            answer,
            marks
        }

        let questionModel = new Question(questions);
        questionModel.save().then((error, data) => {
            if (error) {
                response.json(error);
            }

            response.json(data);
        })

    }
    catch (error) {
        response.json(error.message);
    }
}

module.exports = question;