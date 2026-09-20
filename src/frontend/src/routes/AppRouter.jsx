import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CatalogoPublico from '../pages/public/CatalogoPublico';
import Login from '../pages/public/Login';
import Registro from '../pages/public/Registro';

import ConsultarProductos from '../pages/admin/ConsultarProductos';
import RegistrarProducto from '../pages/admin/RegistrarProducto';
import EditarProducto from '../pages/admin/EditarProducto';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Catálogo principal (Puerta de entrada) */}
                <Route path="/" element={<CatalogoPublico />} />

                {/* Formularios de acceso */}
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />


                <Route path="/admin/productos" element={<ConsultarProductos />} />

                {/* Formularios de inventario */}
                <Route path="/admin/productos/nuevo" element={<RegistrarProducto />} />
                <Route path="/admin/productos/editar/:id" element={<EditarProducto />} />

                {/* Atrapa cualquier URL mal escrita y muestra un mensaje amigable */}
                <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px' }}><h2>404 - Página no encontrada</h2></div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;