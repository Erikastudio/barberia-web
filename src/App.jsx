import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("Corte clásico");

  const enviarWhatsApp = () => {
    const mensaje = `Hola, quiero agendar una cita:
- Nombre: ${nombre}
- Servicio: ${servicio}`;

    window.open(
      `https://wa.me/573134623765?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <div style={styles.page}>
      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/573208355266?text=Hola%20quiero%20agendar%20una%20cita"
        target="_blank"
        style={styles.whatsapp}
      >
        💬 WhatsApp
      </a>

      {/* HERO */}
      <header style={styles.hero}>
        <div style={styles.overlay}></div>

        <h1 style={styles.title}>Barbería Pro 💈</h1>
        <p style={styles.subtitle}>Estilo, confianza y precisión</p>
      </header>

      {/* SERVICIOS */}
      <section style={styles.section}>
        <h2 style={styles.fadeIn}>Servicios</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Corte clásico</div>
          <div style={styles.card}>Fade moderno</div>
          <div style={styles.card}>Barba</div>
        </div>
      </section>

      {/* GALERÍA */}
      <section style={styles.dark}>
        <h2 style={styles.fadeIn}>Galería 💈</h2>

        <div style={styles.grid}>
          <img style={styles.img} src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186" />
          <img style={styles.img} src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1" />
          <img style={styles.img} src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a" />
        </div>
      </section>

      {/* PRECIOS */}
      <section style={styles.section}>
        <h2>Precios</h2>
        <p>Corte clásico: $15.000</p>
        <p>Fade moderno: $20.000</p>
        <p>Barba: $10.000</p>
      </section>

      {/* TESTIMONIOS */}
      <section style={styles.dark}>
        <h2>Opiniones ⭐</h2>

        <div style={styles.grid}>
          <div style={styles.card}>“Excelente servicio 🔥”</div>
          <div style={styles.card}>“Muy profesionales”</div>
          <div style={styles.card}>“Recomendado 100%”</div>
        </div>
      </section>

      {/* RESERVA */}
      <section style={styles.form}>
        <h2>Agenda tu cita 📅</h2>

        <input
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
        />

        <select
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
          style={styles.input}
        >
          <option>Corte clásico</option>
          <option>Fade moderno</option>
          <option>Barba</option>
        </select>

        <button onClick={enviarWhatsApp} style={styles.button}>
          Enviar a WhatsApp 💬
        </button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Barbería Pro
      </footer>
    </div>
  );
}

/* ESTILOS PRO */
const styles = {
  page: {
    fontFamily: "Arial",
    backgroundColor: "#0f0f0f",
    color: "white",
    overflowX: "hidden",
  },

  hero: {
    height: "65vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  title: {
    fontSize: "52px",
    color: "#25D366",
    zIndex: 1,
    animation: "fadeIn 1.5s ease-in",
  },

  subtitle: {
    zIndex: 1,
    fontSize: "18px",
    opacity: 0.9,
    animation: "fadeIn 2s ease-in",
  },

  section: {
    padding: "60px 20px",
    textAlign: "center",
  },

  dark: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#111",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  card: {
    backgroundColor: "#1a1a1a",
    padding: "18px",
    borderRadius: "12px",
    width: "170px",
    transition: "transform 0.3s",
    cursor: "pointer",
  },

  img: {
    width: "200px",
    borderRadius: "12px",
    transition: "transform 0.3s",
  },

  form: {
    padding: "60px",
    backgroundColor: "#111",
    textAlign: "center",
  },

  input: {
    display: "block",
    margin: "10px auto",
    padding: "12px",
    width: "260px",
    borderRadius: "10px",
    border: "none",
  },

  button: {
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 22px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },

  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    padding: "15px",
    borderRadius: "50px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    zIndex: 1000,
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "black",
  },
};

/* ANIMACIÓN */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }`,
  styleSheet.cssRules.length
);

export default App;