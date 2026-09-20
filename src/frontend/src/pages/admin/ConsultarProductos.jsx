// src/pages/admin/ConsultarProductos.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import TopBar from '../../components/admin/TopBar';
import ProductTable from '../../components/admin/ProductTable'; // Importamos la tabla
import '../../styles/variables.css';

function ConsultarProductos() {
    // Simulamos la base de datos de productos encontrados
    // (Para probar el estado vacío, cambia esto a: const resultadosBusqueda = []; )
    const resultadosBusqueda = [
        { nombre: 'Champiñón París', stock: 180, precio: '$4.200 ARS / kg', imagen: 'https://placehold.co/40x40' },
        { nombre: 'Champiñón Portobello', stock: 95, precio: '$5.800 ARS / kg', imagen: 'https://placehold.co/40x40' },
        { nombre: 'Gírgolas (Ostras)', stock: 40, precio: '$6.500 ARS / kg', imagen: 'https://placehold.co/40x40' },
        { nombre: 'Seta Shiitake', stock: 15, precio: '$8.900 ARS / kg', imagen: 'https://placehold.co/40x40' },
    ];

    return (
        <div className="admin-layout">
            <Sidebar />

            <main className="admin-main-container">
                <TopBar />

                <section className="page-content">

                    <div className="page-header">
                        <h1 className="page-title">Consultar Productos</h1>
                        <p className="page-subtitle">Busca y visualiza los productos agrícolas disponibles en el catálogo de SAMIFRUBER.</p>
                    </div>

                    <div className="search-container" style={{ border: '1.5px solid #2E7D32' }}>
                        {/* El buscador (simulando que buscó "Champiñones") */}
                        <div className="search-icon-placeholder" style={{ borderColor: '#2E7D32' }}></div>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Ej. Fruta de dragón..."
                            defaultValue="Champiñones"
                        />
                    </div>

                    {/* RENDERIZADO CONDICIONAL: 
                        Si hay resultados en el arreglo, mostramos la tabla. 
                        Si el arreglo está vacío, mostramos el empty state. */}

                    {resultadosBusqueda.length > 0 ? (
                        <ProductTable productos={resultadosBusqueda} />
                    ) : (
                        <div className="empty-state">
                            <div className="empty-state-icon-bg">
                                <div className="empty-state-icon"></div>
                            </div>
                            <div className="empty-state-text-container">
                                <h2 className="empty-state-title">No existen coincidencias en el catálogo</h2>
                                <p className="empty-state-desc">Prueba buscando con palabras clave diferentes o verifica la ortografía del término.</p>
                            </div>
                        </div>
                    )}

                </section>
            </main>
        </div>
    );
}

export default ConsultarProductos;