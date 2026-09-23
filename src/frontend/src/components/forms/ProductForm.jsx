import React from 'react';
import '../../styles/variables.css';

function ProductForm({ modoEdicion = false, datosIniciales = {}, errores = {}, onCancel }) {
    return (
        <form className="form-card" onSubmit={(e) => e.preventDefault()}>

            <div className="form-group">
                <label className="form-label">Nombre del Producto</label>
                <div className={`form-input-wrapper ${errores.nombre ? 'has-error' : ''}`}>
                    <input
                        type="text"
                        className="form-input"
                        defaultValue={datosIniciales.nombre || ''}
                        placeholder="Ej. Pimentón, Tomate..."
                    />
                </div>
                {errores.nombre && <span className="form-error-text">{errores.nombre}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Precio (COP)</label>
                <div className={`form-input-wrapper ${errores.precio ? 'has-error' : ''}`}>
                    <input
                        type="number"
                        className="form-input"
                        defaultValue={datosIniciales.precio || ''}
                    />
                </div>
                {errores.precio && <span className="form-error-text">{errores.precio}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Categoría</label>
                <div className={`form-input-wrapper ${errores.categoria ? 'has-error' : ''}`}>
                    <select className="form-input" defaultValue={datosIniciales.categoria || ''}>
                        <option value="">Seleccionar...</option>
                        <option value="Verduras">Verduras</option>
                        <option value="Frutas">Frutas</option>
                        <option value="Especias">Especias</option>
                    </select>
                </div>
                {errores.categoria && <span className="form-error-text">{errores.categoria}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Stock disponible</label>
                <div className={`form-input-wrapper ${errores.stock ? 'has-error' : ''}`}>
                    <input
                        type="number"
                        className="form-input"
                        defaultValue={datosIniciales.stock || ''}
                    />
                </div>
                {errores.stock && <span className="form-error-text">{errores.stock}</span>}
            </div>

            <div className="button-group">
                <button type="submit" className="btn-primary">
                    {modoEdicion ? 'Guardar Cambios' : 'Guardar Producto'}
                </button>
                <button type="button" className="btn-secondary" onClick={onCancel}>
                    Cancelar
                </button>
            </div>

        </form>
    );
}

export default ProductForm;