var mongoose = require('mongoose');

const tutorialesSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    titulo: {
        type: String,
    },
    link: {
        type: String,
    },
});

module.exports = mongoose.model('tutorial', tutorialesSchema, "tutorial");