const mongoose = require('mongoose')
const Carro = require("../models/Carro")
const Marca = require("../models/Marca")

const carroController={
    criar: async(req, res) => {
        const{ nome, marca, ano } = req.body

        const novoCarro = await Carro.create({nome, marca, ano })
        
        return res.json(novoCarro)
    },
    listar: async (req, res) => {
        const carros = await Carro.find().populate("marca")
        return res.json(carros)
    }
}

module.exports = carroController