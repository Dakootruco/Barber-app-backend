// src/routes/serviciosRoutes.js
const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

// Cuando alguien entre a esta ruta, ejecuta la función del controlador
router.get('/', serviciosController.obtenerServicios);

module.exports = router;