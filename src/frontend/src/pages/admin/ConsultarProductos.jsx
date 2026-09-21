// src/pages/admin/ConsultarProductos.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/variables.css';

function ConsultarProductos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Cargar productos del backend al montar el componente
    const obtenerInventario = async () => {
        try {
            const respuesta = await fetch('http://localhost:4000/api/productos');
            const data = await respuesta.json();
            setProductos(data);
            setCargando(false);
        } catch (error) {
            console.error('Error al cargar inventario:', error);
            setCargando(false);
        }
    };



    useEffect(() => {
        obtenerInventario();
    }, []);

    function ConsultarProductos() {
        const [productos, setProductos] = useState([]);
        const [cargando, setCargando] = useState(true);

        const obtenerInventario = async () => {
            // ... (código existente para cargar)
        };

        useEffect(() => {
            obtenerInventario();
        }, []);

        // >>> AQUÍ COLOCAS LA FUNCIÓN DE ELIMINAR <<<
        const eliminarProductoAPI = async (id) => {
            if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;

            try {
                const respuesta = await fetch(`http://localhost:4000/api/productos/${id}`, {
                    method: 'DELETE'
                });
                if (respuesta.ok) {
                    setProductos(productos.filter(p => p.id !== id));
                } else {
                    alert('No se pudo eliminar el producto');
                }
            } catch (error) {
                console.error('Error al eliminar:', error);
            }
        };
    }

    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Inter' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ color: '#3E2723', fontFamily: 'Manrope', fontWeight: '800', margin: 0 }}>Gestión de Inventario</h2>
                    <p style={{ color: '#8D6E63', margin: '4px 0 0 0' }}>Administra los productos disponibles en SAMIFRUBER.</p>
                </div>
                <Link
                    to="/admin/productos/nuevo"
                    style={{ background: '#2E7D32', color: 'white', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
                >
                    + Nuevo Producto
                </Link>
            </div>

            {cargando ? (
                <p style={{ color: '#8D6E63' }}>Cargando inventario...</p>
            ) : (
                <div style={{ background: '#FAF7F2', border: '1px solid #E6DEC9', borderRadius: '12px', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: '#EFEBE9', color: '#3E2723', borderBottom: '1px solid #E6DEC9' }}>
                                <th style={{ padding: '12px 16px' }}>Nombre</th>
                                <th style={{ padding: '12px 16px' }}>Categoría</th>
                                <th style={{ padding: '12px 16px' }}>Precio</th>
                                <th style={{ padding: '12px 16px' }}>Stock</th>
                                <th style={{ padding: '12px 16px', textAlign: 'center' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((prod) => (
                                <tr key={prod.id} style={{ borderBottom: '1px solid #E6DEC9' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '600', color: '#3E2723' }}>{prod.nombre}</td>
                                    <td style={{ padding: '12px 16px', color: '#8D6E63' }}>{prod.categoria}</td>
                                    <td style={{ padding: '12px 16px', color: '#2E7D32', fontWeight: 'bold' }}>$ {prod.precio.toLocaleString()}</td>
                                    <td style={{ padding: '12px 16px', color: '#3E2723' }}>{prod.stock} {prod.unidad || 'lb'}</td>
                                    <td style={{ padding: '12px 16px', textAlign: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                        <button style={{ background: '#FFA726', border: 'none', padding: '6px 10px', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Editar</button>
                                        <button style={{ background: '#E53935', border: 'none', padding: '6px 10px', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ConsultarProductos;