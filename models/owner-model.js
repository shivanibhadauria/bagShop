const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({

    username: {
        type: String,
        minlength: 3,
        trim: true
    },
    email: string,
    password: string,
    products: {
        typeof: array,
        default: []
    },
    picture: String,
    gstin: String

});

module.exports = mongoose.model('owner', ownerSchema);