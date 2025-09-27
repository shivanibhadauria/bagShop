const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bagshop');

const userSchema = mongoose.Schema({

    username: string,
    email: string,
    password: string,
    cart: {
        typeof: array,
        default: []
    },
    isAdming: boolean,
    orderes: {
        typeof: array,
        default: []

    },
    contact: number,
    picture: String

});

module.exports = mongoose.model('User', userSchema);