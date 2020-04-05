const Question = require('../model/questionSchema');
const Test = require('../model/testSchema');
const question = {};

question.create = async (request, response) => {
    try {

        const { question, options, answer, marks, testId } = request.body.question
        let questions = {
            question,
            options,
            answer,
            marks
        }

        let questionModel = new Question(questions);
        questionModel.save().then(data => {

            return Test.findOneAndUpdate(
                { _id: testId },
                { $push: { questions: data._id } },
                { new: true }

            );
        }).then(data => response.json(data)).catch(error => response.json(error));

    }
    catch (error) {
        response.json(error.message);
    }
}

module.exports = question;