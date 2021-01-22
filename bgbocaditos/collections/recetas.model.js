var mongoose = require('mongoose');

const recetasSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    titulo: {
        type: String,
    },
    link: {
        type: String
    },
    imagen: {
        type: String,
    },
});

module.exports = mongoose.model('bocadito', recetasSchema, "bocadito");