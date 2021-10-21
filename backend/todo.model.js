const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    central: {
        type: String
    },
    constructeur: {
        type: String
    },
    type: {
        type: String
    },
    equipements: {
        type: Number
    },
    nombreab:{
        type: Number
    },
    taux: {
        type:Number
    }
});

module.exports = mongoose.model('Todo', Todo);