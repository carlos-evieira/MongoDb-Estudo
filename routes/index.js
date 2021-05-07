const express = require("express");
const carroController = require("../controllers/carroController");
const marcaController = require("../controllers/marcaController");
const router = express.Router();
//rotas
router.post("/carro", carroController.criar);
router.get("/carro", carroController.listar);

router.post("/marca", marcaController.criar);

module.exports = router;