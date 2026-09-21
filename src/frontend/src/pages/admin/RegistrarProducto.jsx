// src/pages/admin/RegistrarProducto.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/variables.css';

function RegistrarProducto() {
    const navigate = useNavigate();

    // 1. Estados para los campos del formulario
    const [form, setForm] = useState({
        nombre: '',
        precio: '',
        categoria: '',
        stock: '',
        unidad: 'lb',
        imagen: 'https://placehold.co/280x220'
    });

    const [mensaje, setMensaje] = useState('');

    // 2. Manejar cambios en los inputs
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 3. Enviar datos al backend mediante POST
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch('http://localhost:4000/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (respuesta.ok) {
                setMensaje('¡Producto registrado con éxito!');
                setTimeout(() => {
                    navigate('/'); // Redirige al catálogo para ver el cambio reflejado
                }, 1500);
            } else {
                setMensaje('Hubo un error al registrar el producto.');
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setMensaje('No se pudo conectar con el servidor.');
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Inter' }}>
            <h2 style={{ color: '#3E2723', fontFamily: 'Manrope', fontWeight: '800' }}>Registrar Nuevo Producto</h2>
            <p style={{ color: '#8D6E63', marginBottom: '20px' }}>Ingresa los datos de la cosecha para añadirlos al inventario.</p>

            {mensaje && <div style={{ padding: '10px', background: '#E8F5E9', color: '#2E7D32', marginBottom: '15px', borderRadius: '6px' }}>{mensaje}</div>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#3E2723', fontWeight: '600' }}>Nombre del producto:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #E6DEC9', borderRadius: '6px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#3E2723', fontWeight: '600' }}>Precio (COP):</label>
                    <input
                        type="number"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #E6DEC9', borderRadius: '6px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#3E2723', fontWeight: '600' }}>Categoría:</label>
                    <input
                        type="text"
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #E6DEC9', borderRadius: '6px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#3E2723', fontWeight: '600' }}>Stock disponible:</label>
                    <input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #E6DEC9', borderRadius: '6px' }}
                    />
                </div>

                <button
                    type="submit"
                    style={{ background: '#2E7D32', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
                >
                    Guardar Producto en el Servidor
                </button>
            </form>
        </div>
    );
}

export default RegistrarProducto;