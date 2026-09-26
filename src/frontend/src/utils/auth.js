// src/utils/auth.js

// Usuarios de prueba mientras no existe backend de autenticación real.
// TODO: reemplazar por validación contra el backend (POST /api/login)
const USUARIOS_PRUEBA = [
    { correo: 'administrador@samifruber.com', contrasena: '123456', rol: 'admin', nombre: 'Administrador' },
    { correo: 'cliente@samifruber.com', contrasena: '123456', rol: 'cliente', nombre: 'Cliente' },
];

export function validarCredenciales(correo, contrasena) {
    return USUARIOS_PRUEBA.find(
        (u) => u.correo.toLowerCase() === correo.toLowerCase() && u.contrasena === contrasena
    );
}

export function guardarSesion(usuario) {
    localStorage.setItem('samifruber_sesion', JSON.stringify({ correo: usuario.correo, rol: usuario.rol, nombre: usuario.nombre }));
}

export function obtenerSesion() {
    const data = localStorage.getItem('samifruber_sesion');
    return data ? JSON.parse(data) : null;
}

export function cerrarSesion() {
    localStorage.removeItem('samifruber_sesion');
}