result = {};

result.getResponse = async (request, response) => {
    try {

        console.log(request.body)

    } catch (error) {
        response.json(error.message);
    }
}

module.exports = result