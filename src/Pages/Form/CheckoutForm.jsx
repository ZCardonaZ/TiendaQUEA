import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

export default function FormularioCompra({ carrito, setCarrito, setDatosCompra }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fecha = new Date().toLocaleString();
    const resumen = {
      ...form,
      carrito,
      fecha,
      subtotal: carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    };
    resumen.iva = resumen.subtotal * 0.19;
    resumen.total = resumen.subtotal + resumen.iva;

    setDatosCompra(resumen);
    setCarrito([]);
    navigate("/bill");
  };

  return (
    <form className="formulario-compra" onSubmit={handleSubmit}>
      <h2>Finalizar Compra</h2>
      
      <div className="form-group">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          onChange={handleChange}
          placeholder="Ejemplo: Leo Messi"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="direccion">Dirección de envío</label>
        <input
          id="direccion"
          name="direccion"
          type="text"
          required
          onChange={handleChange}
          placeholder="Ejemplo: Calle BATMAN"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="ciudad">Ciudad</label>
        <input
          id="ciudad"
          name="ciudad"
          type="text"
          required
          onChange={handleChange}
          placeholder="Ejemplo: Ciudad Gotica"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="telefono">Teléfono de contacto</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          onChange={handleChange}
          placeholder="Ejemplo : 3001234567"
        />
      </div>
      
      <button type="submit">
        Confirmar y Generar Factura
      </button>
    </form>
  );
}