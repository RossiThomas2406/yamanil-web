import React from 'react';
import styles from './Calidad.module.css';

const Calidad = () => {
  return (
    <div className={styles.container}>
      
      <header className={styles.header}>
        <h1 className={styles.title}>Política de Calidad</h1>
      </header>

      <div className={styles.content}>
        
        {/* Bloque Principal */}
        <section className={styles.policySection}>
            <h2 className={styles.subtitle}>Compromiso con la Excelencia</h2>
            <p className={styles.text}>
                En <strong>SATRO S.A.</strong> y nuestra subsidiaria <strong>REBESA S.A.</strong>, 
                establecemos un Sistema de Gestión de Calidad diseñado para garantizar un servicio 
                de distribución ágil y eficiente.
            </p>
            <p className={styles.text}>
                Nuestro principal objetivo es superar las expectativas de nuestros clientes de manera 
                competitiva y rentable, evaluando sistemáticamente el grado de satisfacción.
            </p>

            {/* Objetivos */}
            <ul className={styles.objectiveList}>
                <li>
                    <span className={styles.check}>✔</span>
                    Promover la mejora continua en todos los procesos.
                </li>
                <li>
                    <span className={styles.check}>✔</span>
                    Asegurar los recursos para verificación y mantenimiento de flota.
                </li>
                <li>
                    <span className={styles.check}>✔</span>
                    Mejorar la productividad a través del desarrollo de nuestra gente.
                </li>
                <li>
                    <span className={styles.check}>✔</span>
                    Cumplir con los requisitos legales y de las partes interesadas.
                </li>
            </ul>

            {/* Badge ISO */}
            <div className={styles.isoBadge}>
                <div className={styles.isoLogo}>ISO</div>
                <div className={styles.isoText}>
                    <h4>Certificación ISO 9001:2015</h4>
                    <p>
                        Basamos nuestro sistema de gestión en los estándares internacionales 
                        más exigentes para asegurar la calidad en cada entrega.
                    </p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Calidad;