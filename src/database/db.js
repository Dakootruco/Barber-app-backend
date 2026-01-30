const { Pool } = require('pg');
require('dotenv').config(); // Cargar las variables del archivo .env

// Configuración de la conexión
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Mensaje para saber si se conectó bien
pool.on('connect', () => {
  console.log('📦 Conexión exitosa a la Base de Datos');
});

module.exports = pool;