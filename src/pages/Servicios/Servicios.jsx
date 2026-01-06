import React from 'react';
import styles from './Servicios.module.css';

const Servicios = () => {

  // Datos reales extraídos de la web de Satro
  const servicesList = [
    {
      id: 1,
      title: "Distribución Directa",
      desc: "Proveemos a Coca-Cola Femsa S.A. el mejor servicio de distribución del país desde hace más de 25 años. \n\nNuestra flota actualizada (máximo 10 años) y nuestro plantel de choferes capacitados nos permiten entregar más de 1 millón de litros de bebidas por día, abasteciendo a 6 millones de habitantes.",
      tags: ["Coca-Cola Femsa", "+25 Años", "Flota Moderna"],
      img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1920&auto=format&fit=crop" // Foto Camión
    },
    {
      id: 2,
      title: "Distribuidora Rebesa",
      desc: "Somos el distribuidor de bebidas con mayor variedad de productos en la zona Oeste (Isidro Casanova, Laferrere, Virrey del Pino, entre otros).\n\nRealizamos entregas semanales con un alto índice de calidad, asegurando que los productos lleguen en tiempo y forma al punto de venta.",
      tags: ["Logística Capilar", "Zona Oeste", "Consumo Masivo"],
      img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1920&auto=format&fit=crop" // Foto Almacén/Bebidas
    },
    {
      id: 3,
      title: "Distribución Interplanta",
      desc: "Mantenemos equilibrado el stock de los distintos Centros de Distribución moviendo unos 130.000 cajones diarios.\n\nUtilizamos tecnología de punta integrando Tracking GPS y tablets en cabina para mantener la operación controlada de manera online.",
      tags: ["Tecnología GPS", "Inter-Centros", "Gran Volumen"],
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop" // Foto Carga
    },
    {
      id: 4,
      title: "Mantenimiento de Flotas",
      desc: "Con más de 20 años de experiencia y 7000m² de infraestructura, realizamos mantenimiento preventivo y correctivo.\n\nContamos con especialistas en Herrería, Gomería, Pintura, Electricidad y Mecánica para reducir las fallas al mínimo.",
      tags: ["Taller Propio", "24hs", "Preventivo"],
      img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1920&auto=format&fit=crop" // Foto Mecánico
    },
    {
      id: 5,
      title: "Desarrollo de Carrocerías",
      desc: "Diseñamos y fabricamos nuestras propias carrocerías adaptadas a las necesidades específicas de la distribución de bebidas, garantizando durabilidad y eficiencia en la carga.",
      tags: ["Fabricación", "Metalúrgica", "Diseño a medida"],
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1920&auto=format&fit=crop" // Foto Soldadura
    }
  ];

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Nuestras Unidades de Negocio</h1>
      </header>

      <div className={styles.container}>
        {servicesList.map((service) => (
          <div key={service.id} className={styles.serviceRow}>
            
            {/* Imagen */}
            <div className={styles.imageBox}>
                <img src={service.img} alt={service.title} />
            </div>

            {/* Texto */}
            <div className={styles.textBox}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.desc}</p>
                
                {/* Badges/Etiquetas */}
                <div style={{marginTop: '15px'}}>
                    {service.tags.map((tag, index) => (
                        <span key={index} className={styles.badge}>{tag}</span>
                    ))}
                </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;