// src/backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba inicial
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Servidor de SAMIFRUBER funcionando correctamente' });
});

// Ruta temporal de productos (para simular el inventario de la Época 1)
app.get('/api/productos', (req, res) => {
    res.json([
        { id: 1, nombre: 'Jengibre', precio: 2800, categoria: 'Especias', stock: 45 },
        { id: 2, nombre: 'Tomate Chonto', precio: 3500, categoria: 'Verduras', stock: 120 }
    ]);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});