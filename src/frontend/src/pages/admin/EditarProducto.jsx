// src/pages/admin/EditarProducto.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import TopBar from '../../components/admin/TopBar';
import ProductForm from '../../components/forms/ProductForm';
import Alert from '../../components/ui/Alert';
import Modal from '../../components/ui/Modal';
import '../../styles/variables.css';

function EditarProducto() {
    const { id } = useParams();
    const navigate = useNavigate();

    // TODO: reemplazar por fetch real: GET /api/productos/:id
    const productosSimulados = {
        1: { nombre: 'Champiñón París', precio: '4200', categoria: 'Verduras', stock: '180' },
        2: { nombre: 'Champiñón Portobello', precio: '5800', categoria: 'Verduras', stock: '95' },
    };

    const [productoOriginal, setProductoOriginal] = useState(null);
    const [errores, setErrores] = useState({});
    const [alerta, setAlerta] = useState(null);
    const [datosPendientes, setDatosPendientes] = useState(null);

    useEffect(() => {
        const producto = productosSimulados[id] || { nombre: '', precio: '', categoria: '', stock: '' };
        setProductoOriginal(producto);
    }, [id]);

    const sonIguales = (a, b) =>
        a.nombre === b.nombre &&
        String(a.precio) === String(b.precio) &&
        a.categoria === b.categoria &&
        String(a.stock) === String(b.stock);

    const manejarGuardar = async (datosFormulario) => {
        if (sonIguales(productoOriginal, datosFormulario)) {
            setAlerta({ tipo: 'advertencia', mensaje: 'No se detectaron cambios. La información del producto se mantiene igual.' });
            return;
        }

        try {
            // TODO: reemplazar por: await fetch(`/api/productos/${id}`, { method: 'PUT', body: JSON.stringify(datosFormulario) })
            setProductoOriginal(datosFormulario);
            setAlerta({ tipo: 'exito', mensaje: 'Información del producto actualizada correctamente' });
        } catch (error) {
            setAlerta({ tipo: 'error', mensaje: 'Ocurrió un error al guardar los cambios. Intenta de nuevo.' });
        }
    };

    const manejarCancelar = (datosFormulario) => {
        if (sonIguales(productoOriginal, datosFormulario)) {
            navigate('/admin/productos');
        } else {
            setDatosPendientes(datosFormulario);
        }
    };

    const confirmarDescarte = () => {
        setDatosPendientes(null);
        navigate('/admin/productos');
    };

    if (!productoOriginal) {
        return (
            <div className="admin-layout">
                <Sidebar />
                <main className="admin-main-container">
                    <TopBar />
                    <section className="page-content">
                        <p>Cargando producto...</p>
                    </section>
                </main>
            </div>
        );
    }

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="admin-main-container" style={{ position: 'relative' }}>
                <TopBar />

                {alerta && <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} />}

                <section className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Editar Producto</h1>
                        <p className="page-subtitle">Modifica los detalles del producto agrícola seleccionado en el inventario.</p>
                    </div>

                    <ProductForm
                        modoEdicion={true}
                        datosIniciales={productoOriginal}
                        errores={errores}
                        onSubmit={manejarGuardar}
                        onCancel={manejarCancelar}
                    />
                </section>

                {datosPendientes && (
                    <Modal
                        titulo="⚠ Confirmar Descarte"
                        mensaje="¿Desea descartar las modificaciones y mantener los datos originales?"
                        textoConfirmar="Descartar Cambios"
                        onConfirm={confirmarDescarte}
                        onCancel={() => setDatosPendientes(null)}
                    />
                )}
            </main>
        </div>
    );
}

export default EditarProducto;