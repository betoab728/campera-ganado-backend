const express = require('express');
const ganadoRoutes = require('./routes/ganado.routes');
const tipoGanadoRoutes = require('./routes/tipoGanado.routes');
const ubicacionRoutes = require('./routes/ubicacion.routes');
const razaRoutes = require('./routes/raza.routes');
const dietaRoutes = require('./routes/dieta.routes');
const celoRoutes = require('./routes/celo.routes');
const reproduccionRoutes = require('./routes/reproduccion.routes');
const vacunaRoutes = require('./routes/vacuna.routes');
const apareamientoRoutes = require('./routes/apareamiento.routes');
const tratamientoRoutes = require('./routes/tratamiento.routes');
const estadoSaludRoutes = require('./routes/estadoSalud.routes');

const cors = require('cors');
const morgan = require('morgan');

const app = express(); // Aquí creas correctamente la instancia de Express

// Middlewares
app.use(cors()); // Para habilitar CORS
app.use(morgan('dev')); // Para registrar solicitudes en consola
app.use(express.json()); // Para procesar datos JSON
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios

// Rutas
app.use('/api/ganado', ganadoRoutes);
app.use('/api/tipo-ganado', tipoGanadoRoutes);
app.use('/api/ubicacion', ubicacionRoutes);
app.use('/api/raza', razaRoutes);
app.use('/api/dieta', dietaRoutes);
app.use('/api/celo', celoRoutes);
app.use('/api/reproduccion', reproduccionRoutes);
app.use('/api/vacuna', vacunaRoutes);
app.use('/api/apareamiento', apareamientoRoutes);
app.use('/api/tratamiento', tratamientoRoutes);
app.use('/api/estado-salud', estadoSaludRoutes);
// Manejo de errores (opcional)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

module.exports = app; // Exportar la instancia de Express
