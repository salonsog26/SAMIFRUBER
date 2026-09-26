import React, { createContext, useContext, useMemo, useState } from 'react';

const ProductosContext = createContext(null);

const PRODUCTOS_INICIALES = [
    { id: '1', nombre: 'Champiñón París', stock: 180, precio: '4200', categoria: 'Verduras', unidadMedida: 'libra', imagen: 'https://placehold.co/40x40' },
    { id: '2', nombre: 'Champiñón Portobello', stock: 95, precio: '5800', categoria: 'Verduras', unidadMedida: 'libra', imagen: 'https://placehold.co/40x40' },
    { id: '3', nombre: 'Gírgolas (Ostras)', stock: 40, precio: '6500', categoria: 'Verduras', unidadMedida: 'unidad', imagen: 'https://placehold.co/40x40' },
    { id: '4', nombre: 'Seta Shiitake', stock: 15, precio: '8900', categoria: 'Verduras', unidadMedida: 'unidad', imagen: 'https://placehold.co/40x40' },
];

export function validarProducto(datos) {
    const errores = {};
    if (!datos.nombre?.trim()) {
        errores.nombre = 'Este campo es obligatorio';
    }
    if (datos.precio === '' || datos.precio == null || Number(datos.precio) <= 0) {
        errores.precio = 'Ingresa un precio válido';
    }
    if (!datos.categoria) {
        errores.categoria = 'Selecciona una categoría';
    }
    if (datos.stock === '' || datos.stock == null || Number(datos.stock) < 0) {
        errores.stock = 'Ingresa un stock válido';
    }
    if (!datos.unidadMedida) {
        errores.unidadMedida = 'Selecciona una unidad de medida';
    }
    return errores;
}

export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState(PRODUCTOS_INICIALES);

    const value = useMemo(() => ({
        productos,
        obtenerPorId: (id) => productos.find((producto) => String(producto.id) === String(id)),
        actualizarProducto: (id, datos) => {
            setProductos((prev) =>
                prev.map((producto) =>
                    String(producto.id) === String(id)
                        ? {
                            ...producto,
                            nombre: datos.nombre.trim(),
                            precio: String(datos.precio),
                            categoria: datos.categoria,
                            stock: Number(datos.stock),
                            unidadMedida: datos.unidadMedida || 'unidad',
                        }
                        : producto
                )
            );
        },
        agregarProducto: (datos) => {
            const nuevo = {
                id: String(Date.now()),
                nombre: datos.nombre.trim(),
                precio: String(datos.precio),
                categoria: datos.categoria,
                stock: Number(datos.stock),
                unidadMedida: datos.unidadMedida || 'unidad',
                imagen: 'https://placehold.co/40x40',
            };
            setProductos((prev) => [...prev, nuevo]);
            return nuevo;
        },
        eliminarProducto: (id) => {
            setProductos((prev) => prev.filter((producto) => String(producto.id) !== String(id)));
        },
    }), [productos]);

    return (
        <ProductosContext.Provider value={value}>
            {children}
        </ProductosContext.Provider>
    );
}

export function useProductos() {
    const context = useContext(ProductosContext);
    if (!context) {
        throw new Error('useProductos debe usarse dentro de ProductosProvider');
    }
    return context;
}