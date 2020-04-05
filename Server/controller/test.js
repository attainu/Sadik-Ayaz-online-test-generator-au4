const Test = require('../model/testSchema');
const User = require('../model/userSchema');
const test = {};

test.create = async (request, response) => {
    try {

        const { id, name } = request.body.test

        let tests = {
            name
        }

        let testModel = new Test(tests);
        let complete = {
            test: "",
            user: ""
        }
        await testModel.save().then(data => {
            complete.test = { ...data }

            return User.findOneAndUpdate(
                { _id: id },
                { $push: { tests: data._id } },
                { new: true }
            );

        }).then(data => {
            complete.user = { ...data }
            response.json(complete);
        }).catch(error => response.json(error));

    }
    catch (error) {
        response.json(error.message);
    }
}

module.exports = test;