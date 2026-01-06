import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Columna 1: Marca y Resumen */}
        <div className={styles.brand}>
          <h2>SATRO S.A.</h2>
          <p>
            Soluciones logísticas integrales con más de 25 años de trayectoria. 
            Comprometidos con la calidad, el capital humano y la sustentabilidad.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className={styles.links}>
          <h3>Navegación</h3>
          <ul className={styles.linkList}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Nuestros Servicios</Link></li>
            <li><Link to="/calidad">Política de Calidad</Link></li>
            <li><Link to="/rrhh">Trabaja con Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Datos de Contacto */}
        <div className={styles.contact}>
          <h3>Casa Central</h3>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📍</span>
            <span>Churruca 9960, Loma Hermosa,<br />Buenos Aires, Argentina.</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>✉️</span>
            <span>info@satro.com.ar</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📞</span>
            <span>+54 11 4769-XXXX</span>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {currentYear} Satro S.A. - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;