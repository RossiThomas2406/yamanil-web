import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  // Función helper para saber si el link está activo (opcional, para UX)
  const isActive = (path) => location.pathname === path ? styles.activeLink : '';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
            <Link to="/">SATRO S.A.</Link>
        </div>

        {/* Navegación */}
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" className={`${styles.link} ${isActive('/')}`}>
                Inicio
              </Link>
            </li>
            
            {/* Nuevo link importante según análisis del sitio original */}
            <li>
              <Link to="/calidad" className={`${styles.link} ${isActive('/calidad')}`}>
                Calidad
              </Link>
            </li>

            <li>
              <Link to="/servicios" className={`${styles.link} ${isActive('/servicios')}`}>
                Servicios
              </Link>
            </li>
            
            <li>
              <Link to="/rrhh" className={`${styles.link} ${isActive('/rrhh')}`}>
                RRHH
              </Link>
            </li>
            
            <li>
                <Link to="/contacto" className={`${styles.link} ${styles.btnContacto}`}>
                    Contacto
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;