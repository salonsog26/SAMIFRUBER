// src/pages/admin/RegistrarProducto.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import TopBar from '../../components/admin/TopBar';
import ProductForm from '../../components/forms/ProductForm';
import Alert from '../../components/ui/Alert';
import '../../styles/variables.css';

function RegistrarProducto() {
    // Variables de estado para simular las diferentes pantallas de Figma
    // Cambia esto a 'exito' o 'duplicado' para probar las alertas
    const [estadoRegistro, setEstadoRegistro] = useState('exito');

    // Si quieres ver el campo rojo del nombre, descomenta esta línea:
    // const [errores, setErrores] = useState({ nombre: 'Este campo es obligatorio' });
    const [errores, setErrores] = useState({});

    const datosPimenton = { nombre: 'Pimentón', precio: '4000', categoria: 'Verduras', stock: '30' };

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="admin-main-container" style={{ position: 'relative' }}>
                <TopBar />

                {/* Lógica de Renderizado Condicional de la Alerta */}
                {estadoRegistro === 'exito' && (
                    <Alert tipo="exito" mensaje="Producto registrado exitosamente" />
                )}
                {estadoRegistro === 'duplicado' && (
                    <Alert tipo="error" mensaje="El producto ya existe. No se permite registro duplicado" />
                )}

                <section className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Registrar Producto</h1>
                        <p className="page-subtitle">Agrega un nuevo producto agrícola al inventario de distribución.</p>
                    </div>

                    {/* Pasamos los errores al formulario */}
                    <ProductForm
                        modoEdicion={false}
                        datosIniciales={estadoRegistro === 'exito' ? datosPimenton : {}}
                        errores={errores}
                    />
                </section>
            </main>
        </div>
    );
}

export default RegistrarProducto;
