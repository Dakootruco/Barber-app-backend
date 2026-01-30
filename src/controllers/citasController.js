// src/controllers/citasController.js
const pool = require('../database/db');

const crearCita = async (req, res) => {
  // 1. Recibimos los datos que nos envía el cliente (o la IA más tarde)
  const { cliente_nombre, cliente_telefono, barbero_id, servicio_id, fecha_hora } = req.body;

  try {
    // 2. Insertamos en la base de datos
    // Usamos $1, $2... para evitar hackers (Inyección SQL)
    const nuevaCita = await pool.query(
      `INSERT INTO citas (cliente_nombre, cliente_telefono, barbero_id, servicio_id, fecha_hora) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [cliente_nombre, cliente_telefono, barbero_id, servicio_id, fecha_hora]
    );

    // 3. Respondemos con la cita creada
    res.json({
        mensaje: '✅ Cita agendada con éxito',
        cita: nuevaCita.rows[0]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agendar la cita' });
  }
};

module.exports = {
  crearCita
};