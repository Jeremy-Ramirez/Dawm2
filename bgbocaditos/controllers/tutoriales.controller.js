const Bocadito = require("../collections/tutoriales.model");

// Retrieve all Usuarios from the database.
//let principal=document.getElementById('users');

exports.findAll = (req, res) => {
    
    Bocadito.find({},(err, docs) => {
        res.send(docs) 
    })
};