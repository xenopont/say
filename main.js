const schemas = require('./schemas');
const countSchemas = schemas.length;

const say = function() {
    return schemas[Math.floor(Math.random() * countSchemas)]();
}

module.exports = say(); // string result of the function
