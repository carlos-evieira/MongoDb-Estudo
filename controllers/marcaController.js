const Marca = require("../models/Marca")

const marcaController={
    criar: async(req, res) => {
        const{ nome } = req.body

        const novaMarca = await Marca.create({nome })
        
        return res.json(novaMarca)
    },
    
}

module.exports = marcaController