// src/pages/admin/EditarProducto.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import TopBar from '../../components/admin/TopBar';
import ProductForm from '../../components/forms/ProductForm';
import Alert from '../../components/ui/Alert';
import Modal from '../../components/ui/Modal'; // Importamos el Modal
import '../../styles/variables.css';

function EditarProducto() {
    // 1. Estado para controlar qué alerta mostrar (null = ninguna)
    // Cambia esto a 'exito' o 'advertencia' para probar
    const [tipoAlerta, setTipoAlerta] = useState('advertencia');

    // 2. Estado para controlar si la ventana modal está abierta o cerrada
    const [mostrarModalDescarte, setMostrarModalDescarte] = useState(false);

    // Datos simulados
    const datosZanahoria = { nombre: 'Zanahoria', precio: '1800', categoria: 'Verduras', stock: '350' };

    // Funciones para manejar los clics
    const manejarClickCancelar = () => {
        // En lugar de salir directo, abrimos el modal
        setMostrarModalDescarte(true);
    };

    const confirmarDescarte = () => {
        // Aquí iría la lógica para redirigir al catálogo
        console.log("Cambios descartados. Volviendo al catálogo...");
        setMostrarModalDescarte(false);
    };

    const cancelarDescarte = () => {
        // Simplemente cierra el modal y el usuario sigue editando
        setMostrarModalDescarte(false);
    };

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="admin-main-container" style={{ position: 'relative' }}>
                <TopBar />

                {/* Renderizado Condicional de Alertas */}
                {tipoAlerta === 'exito' && (
                    <Alert tipo="exito" mensaje="Información del producto actualizada correctamente" />
                )}
                {tipoAlerta === 'advertencia' && (
                    <Alert tipo="advertencia" mensaje="No se detectaron cambios. Se mantiene la información intacta" />
                )}

                <section className="page-content">
                    <div className="page-header">
                        <h1 className="page-title">Editar Producto</h1>
                        <p className="page-subtitle">Modifica los detalles del producto agrícola seleccionado en el inventario.</p>
                    </div>

                    {/* Le pasamos la función al botón "Cancelar" del formulario */}
                    {/* Nota: Necesitas actualizar ProductForm para que reciba 'onCancel' y se la asigne al botón secundario */}
                    <ProductForm
                        modoEdicion={true}
                        datosIniciales={datosZanahoria}
                        onCancel={manejarClickCancelar}
                    />
                </section>
            </main>

            {/* Renderizado Condicional del Modal (Flota sobre toda la pantalla) */}
            {mostrarModalDescarte && (
                <Modal
                    titulo="Confirmar Descarte"
                    mensaje="¿Deseas descartar las modificaciones y mantener los datos originales?"
                    textoConfirmar="Descartar Cambios"
                    onConfirm={confirmarDescarte}
                    onCancel={cancelarDescarte}
                />
            )}
        </div>
    );
}

export default EditarProducto;
