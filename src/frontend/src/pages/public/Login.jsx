// src/pages/public/Login.jsx
import React from 'react';
import AuthHeroBanner from '../../components/public/AuthHeroBanner';
import PublicNavbar from '../../components/public/PublicNavbar';
import AuthInput from '../../components/forms/AuthInput';
import '../../styles/variables.css';

function Login() {
    return (
        <div className="auth-layout">
            {/* Banner Izquierdo */}
            <AuthHeroBanner />

            {/* Sección del Formulario Derecho */}
            <div className="auth-form-section">
                <PublicNavbar textoEnlace="← Volver al catálogo" rutaEnlace="/" />

                <div style={{ width: '100%', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <h2 style={{ color: '#10271B', fontSize: 36, fontFamily: 'Inter', margin: 0 }}>Bienvenido de nuevo</h2>
                        <p style={{ color: '#68786F', fontSize: 16, fontFamily: 'Inter', margin: 0 }}>Ingresa tus datos para continuar comprando productos frescos.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%' }}>
                        {/* Input de Correo con el error simulado */}
                        <AuthInput label="Correo electrónico" type="email" defaultValue="nombre@correo.com" error="Correo no válido" />

                        {/* Input de Contraseña */}
                        <AuthInput label="Contraseña" type="password" defaultValue="123456" />

                        <div style={{ textAlign: 'right' }}>
                            <a href="#forgot" style={{ color: '#20A34A', fontSize: 14, fontFamily: 'Inter', textDecoration: 'none' }}>¿Olvidaste tu contraseña?</a>
                        </div>

                        <button type="submit" style={{ height: 48, background: '#20A34A', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontFamily: 'Inter', fontWeight: 700, cursor: 'pointer' }}>
                            Ingresar
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <span style={{ color: '#68786F', fontSize: 14, fontFamily: 'Inter' }}>¿No tienes una cuenta? </span>
                        <span style={{ color: '#20A34A', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, cursor: 'pointer' }}>Regístrate aquí</span>
                    </div>
                </div>

                <div style={{ textAlign: 'center', width: '100%', color: '#68786F', fontSize: 12, fontFamily: 'Inter' }}>
                    Al continuar aceptas nuestros términos y política de privacidad.
                </div>
            </div>
        </div>
    );

    // Ejemplo para tu componente de Login (fragmento clave)
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo, password })
            });
            const data = await respuesta.json();

            if (data.success) {
                // Guardamos el token en localStorage para simular la sesión activa
                localStorage.setItem('token', data.token);
                navigate('/admin/productos'); // Redirige al panel de administración
            } else {
                setError(data.mensaje);
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
        }
    };
}

export default Login;