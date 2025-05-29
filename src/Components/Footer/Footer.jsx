import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo-text">QUEA</h2>
          <p>
            Tu tienda de muebles y accesorios para el hogar. Encuentra todo lo que necesitas para crear espacios únicos y funcionales.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 315 123 69 85</span>
            <span><i className="fas fa-envelope"></i> &nbsp; usb@quea.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="/history">Historial de Compras</a></li> {/* */}
            <li><a href="/favorite">Lista de Deseos</a></li> {/* */}
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contacto</h3>
          <p><i className="fas fa-map-marker-alt"></i> Ciudad Gotica, Calle Batman</p>
          <p><i className="fas fa-phone"></i> Teléfono: +57 300 123 4567</p>
          <p><i className="fas fa-envelope"></i> Email: usb@quea.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} TiendaQUEA | Diseñado por Santiago Cardona Gómez
      </div>
    </footer>
  );
};

export default Footer;