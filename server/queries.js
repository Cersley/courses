var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connection = {
    host: 'localhost',
    port: 5432,
    database: 'courses-editor',
    user: 'Yaroslav',
    password: '123456'
};
var db = pgp(connection);

module.exports = {
    getAllPuppies: getAllPuppies,
    getSinglePuppy: getSinglePuppy,
    createPuppy: createPuppy,
    updatePuppy: updatePuppy,
    removePuppy: removePuppy
};