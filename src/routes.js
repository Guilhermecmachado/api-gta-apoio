const express = require("express");
const router = express.Router();
const ReceitasContoller = require('./controllers/ReceitasController');
const CadastroController = require('./controllers/CadastroController');
const Notacontroller = require('./controllers/NotaController');


router.post('/cadastroad', CadastroController.inserirCadastro)
router.post('/validar', CadastroController.validarCadastro)
router.post('/receitaad', ReceitasContoller.inserirReceita)
router.post('/notaad' , Notacontroller.inserirNota)
router.get('/receitatod/:id' , ReceitasContoller.buscarTodasReceitas)
router.get('/receitatodus/:id' , ReceitasContoller.buscarTodasReceitasUsuario)

module.exports = router;