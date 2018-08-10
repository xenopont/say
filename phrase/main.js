const random = require('./tools').random;
const schemas = require('./schemas');

const say = function() {
    return schemas[random(schemas.length)]();
}

module.exports = say(); // string result of the function
