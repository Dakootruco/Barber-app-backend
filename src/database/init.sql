-- Tabla de Servicios
CREATE TABLE IF NOT EXISTS servicios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    duracion_minutos INTEGER DEFAULT 30
);

-- Tabla de Barberos
CREATE TABLE IF NOT EXISTS barberos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    disponible BOOLEAN DEFAULT TRUE
);

-- Tabla de Citas
CREATE TABLE IF NOT EXISTS citas (
    id SERIAL PRIMARY KEY,
    cliente_nombre VARCHAR(100) NOT NULL,
    cliente_telefono VARCHAR(20) NOT NULL,
    barbero_id INTEGER REFERENCES barberos(id),
    servicio_id INTEGER REFERENCES servicios(id),
    fecha_hora TIMESTAMP NOT NULL,
    estado VARCHAR(20) DEFAULT 'pendiente' -- pendiente, confirmada, cancelada
);

-- Insertar algunos datos de prueba
INSERT INTO servicios (nombre, precio, duracion_minutos) VALUES ('Corte Clásico', 350, 30);
INSERT INTO servicios (nombre, precio, duracion_minutos) VALUES ('Corte y Barba', 400, 50);
INSERT INTO servicios (nombre, precio, duracion_minutos) VALUES ('Corte Completo y Tijeras', 450, 60);

INSERT INTO barberos (nombre) VALUES ('Dakoo');
INSERT INTO barberos (nombre) VALUES ('Pedro Navaja');