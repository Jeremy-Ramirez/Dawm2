var mongoose = require('mongoose');


const clienteSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    nombre: {
        type: String,
    },
    email: {
        type: String
    },
    ciudad: {
        type: String,
    },
    telefono: {
        type: String,
    },
    mensaje: {
        type: String,
    },
});

module.exports = mongoose.model('bocadito', clienteSchema, "bocadito");