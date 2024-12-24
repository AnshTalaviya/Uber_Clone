const userModel = require('../models/user.model');


module.exports.createUser = async({
    firstname, lastname, email, password
})