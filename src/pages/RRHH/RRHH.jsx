import React from 'react';
import styles from './RRHH.module.css';

const RRHH = () => {
  return (
    <div className={styles.container}>
      
      {/* Header Sección */}
      <header className={styles.header}>
        <div>
            <h1 className={styles.title}>Capital Humano</h1>
            <p>La columna vertebral de nuestra organización</p>
        </div>
      </header>

      <div className={styles.content}>
        
        {/* Introducción */}
        <p className={styles.introText}>
          En SATRO S.A. consideramos que nuestros colaboradores son fundamentales. 
          Buscamos calidad y excelencia para brindar un servicio diferenciador, 
          creando un contexto de apoyo, credibilidad y diálogo constructivo.
        </p>

        {/* Pilares */}
        <div className={styles.pillars}>
            <div className={styles.pillarCard}>
                <span className={styles.icon}>🎓</span>
                <h3 className={styles.pillarTitle}>Capacitación</h3>
                <p>Planes de formación acordes a las necesidades de cada sector, asegurando el entrenamiento continuo en el puesto de trabajo.</p>
            </div>
            
            <div className={styles.pillarCard}>
                <span className={styles.icon}>🛡️</span>
                <h3 className={styles.pillarTitle}>Seguridad</h3>
                <p>Compromiso total con la salud y la prevención de riesgos. Actuamos preventivamente cumpliendo con todos los requisitos legales.</p>
            </div>

            <div className={styles.pillarCard}>
                <span className={styles.icon}>🚀</span>
                <h3 className={styles.pillarTitle}>Desarrollo</h3>
                <p>Nuestra motivación es conquistar al capital humano, logrando relaciones de largo plazo y garantizando la evolución del desempeño.</p>
            </div>
        </div>

        {/* La Frase Famosa */}
        <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
                “En Recursos Humanos, trabajamos para lograr… no ser necesarios”
            </p>
            <span className={styles.quoteLabel}>Nuestra Huella</span>
        </div>

        {/* Call to Action / Formulario simulado */}
        <div className={styles.joinSection}>
            <h2>¿Querés formar parte de Satro?</h2>
            <p style={{marginBottom: '20px', color: '#666'}}>
                Siempre estamos buscando talento para nuestras áreas de logística, taller y administración.
            </p>
            <button className={styles.btnCV} onClick={() => alert("Aquí abriríamos el cliente de correo o un modal para subir PDF")}>
                Enviar CV a RRHH
            </button>
        </div>

      </div>
    </div>
  );
};

export default RRHH;