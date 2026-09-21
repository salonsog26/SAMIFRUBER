// src/pages/public/CatalogoPublico.jsx
import React from 'react';
import '../../styles/variables.css';

function CatalogoPublico() {
    return (
        <div style={{ width: '100%', height: '100%', background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* Menú Lateral Izquierdo */}
            <div style={{ width: 260, alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 32, paddingBottom: 32, background: '#FAF7F2', borderRight: '1px #E6DEC9 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                    <div style={{ width: 36, height: 36, background: '#2E7D32', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ width: 15.83, height: 15.83, left: 1.67, top: 1.67, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
                        </div>
                    </div>
                    <div style={{ color: '#2E7D32', fontSize: 18, fontFamily: 'Manrope', fontWeight: '800', wordWrap: 'break-word' }}>SAMIFRUBER</div>
                </div>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'rgba(0, 0, 0, 0)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                        <div style={{ width: 18, height: 18, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ width: 13.50, height: 13.50, left: 2.25, top: 2.25, position: 'absolute', outline: '2px #8D6E63 solid', outlineOffset: '-1px' }} />
                        </div>
                        <div style={{ color: '#5D4037', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Catalogo</div>
                    </div>
                    <div style={{ alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#E8F5E9', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                        <div style={{ width: 18, height: 18, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ width: 15, height: 15, left: 1.50, top: 1.50, position: 'absolute', outline: '2px #2E7D32 solid', outlineOffset: '-1px' }} />
                        </div>
                        <div style={{ color: '#2E7D32', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Productos</div>
                    </div>
                </div>
            </div>

            {/* Contenedor Principal */}
            <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 72, paddingLeft: 32, paddingRight: 32, background: 'white', borderBottom: '1px #E6DEC9 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
                        <div style={{ color: '#8D6E63', fontSize: 14, fontFamily: 'Manrope', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>Catálogo Público</div>
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                        <a href="/login" style={{ color: '#2E7D32', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', textDecoration: 'none' }}>Iniciar Sesión</a>
                    </div>
                </div>

                <div style={{ alignSelf: 'stretch', flex: '1 1 0', padding: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                        <div style={{ color: '#3E2723', fontSize: 28, fontFamily: 'Manrope', fontWeight: '800', wordWrap: 'break-word' }}>Nuestros Productos</div>
                        <div style={{ color: '#8D6E63', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Explora la selección agrícola disponible directamente para ti.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogoPublico;