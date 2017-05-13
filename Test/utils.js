var responseValidatorAsync = (expectedStatusCode, validationFunction) => {
    return {
        json: (statusCode, data) => {
            statusCode.should.equal(expectedStatusCode);
            validationFunction(data);
        },
        send: (statusCode, data) => {
            statusCode.should.equal(expectedStatusCode);
            validationFunction(data);
        }
    }
};
module.exports = {
    responseValidatorAsync
};