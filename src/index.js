// src/index.js
const express = require('express');
const cors = require('cors');
const pool = require('./database/db'); // Importamos la conexión

// NUEVO: Importamos las rutas de servicios
const serviciosRoutes = require('./routes/serviciosRoutes');
const citasRoutes = require('./routes/citasRoutes'); // NUEVO 1

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// NUEVO: Definimos la URL base. Todo lo de servicios estará en /api/servicios
app.use('/api/servicios', serviciosRoutes);
app.use('/api/citas', citasRoutes); // NUEVO 2

// Ruta de prueba (la dejamos por si acaso)
app.get('/', async (req, res) => {
    res.send("Bienvenido a la API de BarberTech 💈");
});

// Ruta de prueba
app.get('/', async (req, res) => {
  try {
    // Le preguntamos la hora a la base de datos para ver si responde
    const resultado = await pool.query('SELECT NOW()');
    res.json({
      mensaje: '¡Hola! Servidor y Base de Datos funcionando 💈',
      hora_servidor: resultado.rows[0].now
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error conectando a la base de datos' });
  }
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`-----------------------------------------------`);
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`-----------------------------------------------`);
});