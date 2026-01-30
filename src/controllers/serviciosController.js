const pool = require('../database/db'); // Importamos la conexión a la DB

const obtenerServicios = async (req, res) => {
  try {
    // Le pedimos a la DB todos los servicios
    const resultado = await pool.query('SELECT * FROM servicios');
    
    // Respondemos al navegador con los datos en formato JSON
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los servicios' });
  }
};

module.exports = {
  obtenerServicios
};