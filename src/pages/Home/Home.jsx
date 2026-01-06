import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Logística Integral y Distribución Sustentable
          </h1>
          <p className={styles.subtitle}>
            Más de 25 años moviendo el futuro de la distribución en Argentina.
          </p>
          <Link to="/servicios" className={styles.ctaButton}>
            Conocer Servicios
          </Link>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN */}
      <section className={styles.introSection}>
        <h2 className={styles.sectionTitle}>Satro S.A.</h2>
        <p className={styles.introText}>
          Somos una empresa de servicios donde el factor humano es fundamental. 
          Nuestra motivación es conquistar al capital humano, logrando relaciones de largo plazo. 
          Iniciamos nuestro camino hacia una distribución sustentable incorporando la primer flota 
          de camiones eléctricos del país.
        </p>
      </section>

      {/* 3. PREVIEW SERVICIOS (GRID) */}
      <section className={styles.servicesPreview}>
        <div className={styles.grid}>
          
          {/* Card 1: Distribución */}
          <div className={styles.card}>
            <div>
                <h3 className={styles.cardTitle}>Distribución Directa</h3>
                <p className={styles.cardText}>
                  Proveedores estratégicos de Coca-Cola Femsa S.A. con una flota moderna 
                  y un equipo especializado en logística de alto volumen.
                </p>
            </div>
            <Link to="/servicios" className={styles.cardLink}>Leer más →</Link>
          </div>

          {/* Card 2: Mechanic Service */}
          <div className={styles.card}>
             <div>
                <h3 className={styles.cardTitle}>Mantenimiento de Flota</h3>
                <p className={styles.cardText}>
                  7000m² de infraestructura propia. Expertos en mecánica, carrocería 
                  y mantenimiento preventivo para asegurar disponibilidad total.
                </p>
             </div>
            <Link to="/servicios" className={styles.cardLink}>Ver Taller →</Link>
          </div>

          {/* Card 3: RRHH */}
          <div className={styles.card}>
             <div>
                <h3 className={styles.cardTitle}>Talento Humano</h3>
                <p className={styles.cardText}>
                  Buscamos calidad y excelencia. Nuestro propósito es favorecer 
                  una relación cercana y de desarrollo continuo con nuestra gente.
                </p>
             </div>
            <Link to="/rrhh" className={styles.cardLink}>Únete al equipo →</Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;