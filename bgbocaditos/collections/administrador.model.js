var mongoose = require('mongoose');



const administradorSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    usuario: {
        type: String,
    },
    email: {
        type: String
    },
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    direccion: {
        type: String,
    },
    ciuddad: {
        type: String,
    },
    pais: {
        type: String,
    },
});

module.exports = mongoose.model('bocadito', administradorSchema, "bocadito");