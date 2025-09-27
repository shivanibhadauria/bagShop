const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bagshop').then(function () {
    console.log('connected to mongodb');
}).catch(function (err) {
    console.log('error connecting to mongodb', err);
}
)

module.exports = mongoose.connection;
