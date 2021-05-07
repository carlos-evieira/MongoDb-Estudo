const mongoose = require('mongoose')

const Marca = new mongoose.Schema(
    {
        nome: { type: String },

    }, 
    {
        collection: "Marca",
    }
)

module.exports = mongoose.model('Marca', Marca)