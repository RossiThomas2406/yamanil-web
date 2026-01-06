import React, { useState } from 'react';
import styles from './Contacto.module.css';

const Contacto = () => {
  // Estado simple para simular envío
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarga del navegador
    setEnviado(true);
    alert("Mensaje enviado correctamente (Simulación)");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacto</h1>

      <div className={styles.grid}>
        
        {/* COLUMNA 1: INFORMACIÓN */}
        <div className={styles.infoCard}>
            <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📍 Casa Central</span>
                <p className={styles.infoText}>Churruca 9960, Loma Hermosa</p>
                <p className={styles.infoText}>Buenos Aires, Argentina</p>
            </div>

            <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📧 Email</span>
                <p className={styles.infoText}>info@satro.com.ar</p> {/* Email genérico asumido */}
            </div>

            <div className={styles.infoItem}>
                <span className={styles.infoLabel}>⏰ Horarios</span>
                <p className={styles.infoText}>Lunes a Viernes de 9:00 a 18:00 hs</p>
            </div>

            {/* Mapa de Google Maps (Embed) */}
            <div className={styles.mapContainer}>
                <iframe 
                    title="Mapa Satro"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.877868766466!2d-58.59160568477033!3d-34.58236198046424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9c70b4a450d%3A0x6b8014526f81f18!2sChurruca%209960%2C%20B1657%20Loma%20Hermosa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1641320000000!5m2!1ses-419!2sar" 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>

        {/* COLUMNA 2: FORMULARIO */}
        <div className={styles.formBox}>
            <h2 style={{marginBottom: '20px', color: '#333'}}>Envíanos un mensaje</h2>
            
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre Completo</label>
                    <input type="text" className={styles.input} placeholder="Tu nombre" required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" className={styles.input} placeholder="tucorreo@empresa.com" required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Asunto</label>
                    <select className={styles.input}>
                        <option>Consulta General</option>
                        <option>Recursos Humanos / CV</option>
                        <option>Ventas / Servicios</option>
                        <option>Proveedores</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Mensaje</label>
                    <textarea className={styles.textarea} placeholder="Escribe tu consulta aquí..." required></textarea>
                </div>

                <button type="submit" className={styles.btnSubmit}>
                    {enviado ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Contacto;