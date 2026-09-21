// src/pages/public/CatalogoPublico.jsx
import React from 'react';
import Navbar from '../../components/public/Navbar';
import Footer from '../../components/public/Footer';
import ProductCard from '../../components/public/ProductCard';
import '../../styles/variables.css';

function CatalogoPublico() {
    // Datos de ejemplo (aún sin conectar a backend — pendiente de HU2/HU de catálogo)
    const productosDestacados = [
        { nombre: 'Tomate Chonto', categoria: 'Verduras', precio: '$2.500 COP', unidad: 'lb', imagen: 'https://placehold.co/280x220' },
        { nombre: 'Tomate Chonto', categoria: 'Verduras', precio: '$2.500 COP', unidad: 'lb', imagen: 'https://placehold.co/280x220' },
        { nombre: 'Tomate Chonto', categoria: 'Verduras', precio: '$2.500 COP', unidad: 'lb', imagen: 'https://placehold.co/280x220' },
        { nombre: 'Tomate Chonto', categoria: 'Verduras', precio: '$2.500 COP', unidad: 'lb', imagen: 'https://placehold.co/280x220' },
    ];

    return (
        <div className="public-page">
            <Navbar cartCount={0} />

            {/* Hero */}
            <section className="public-hero">
                <img
                    src="https://placehold.co/1200x340"
                    alt="Cosecha local"
                    className="public-hero-image"
                />
                <div className="public-hero-overlay" />
                <div className="public-hero-content">
                    <span className="public-hero-tag">COSECHA LOCAL · CALIDAD REAL</span>
                    <h1 className="public-hero-title">Del campo a tu puerta.<br />Frescura garantizada</h1>
                </div>
            </section>

            {/* Sección de productos */}
            <section className="public-products-section">
                <div className="public-products-header">
                    <div>
                        <h2 className="public-products-title">Productos frescos</h2>
                        <p className="public-products-subtitle">Seleccionados para tu mesa, directo de la cosecha.</p>
                    </div>
                    <a href="#todos" className="public-products-link">Ver todos los productos →</a>
                </div>

                <div className="public-products-grid">
                    {productosDestacados.map((producto, index) => (
                        <ProductCard key={index} {...producto} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default CatalogoPublico;