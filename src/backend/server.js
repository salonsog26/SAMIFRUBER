// src/backend/server.js
const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos.routes');

const app = express();
const PORT = process.env.PORT || 4000;

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// Middlewares
app.use(cors());
app.use(express.json());

// Usar las rutas modularizadas
app.use('/api/productos', productosRoutes);

// Ruta de comprobación de estado
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Servidor de SAMIFRUBER funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});