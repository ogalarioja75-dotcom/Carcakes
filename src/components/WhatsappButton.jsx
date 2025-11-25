export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5490000000000?text=Hola%20quiero%20hacer%20una%20consulta"
      target="_blank"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "#fff",
        padding: "15px 20px",
        borderRadius: "50px",
        fontWeight: "bold",
        textDecoration: "none",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      WhatsApp
    </a>
  );
}
