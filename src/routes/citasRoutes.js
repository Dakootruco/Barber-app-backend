// src/routes/citasRoutes.js
const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

// POST para crear (http://localhost:3000/api/citas)
router.post('/', citasController.crearCita);

// NUEVO: Ruta para ver la agenda
router.get('/', citasController.obtenerCitas);

module.exports = router;