const schemas = require('./schemas');
const countSchemas = schemas.length;

const say = function() {
    if (countSchemas > 0) {
        return schemas[Math.floor(Math.random() * countSchemas)]();
    }
    return '';
}

module.exports = say(); // string result of the function
