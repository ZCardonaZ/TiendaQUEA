
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-logo-text">TiendaQUEA</h3>
          <p>
            Tu tienda de muebles 3D favorita. Encuentra diseños únicos
            para tu hogar y oficina con la calidad y estilo que nos caracteriza.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/history">Historial de Compras</a></li>
            <li><a href="/favorite">Favoritos</a></li>
            {}
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>Contacto</h4>
          <p><i className="fas fa-map-marker-alt"></i> Calle  Bat-man, Ciudad Gotica, Colombia</p>
          <p><i className="fas fa-phone"></i> +57 315 666 66 66</p>
          <p><i className="fas fa-envelope"></i> info@tiendaquea.com</p>
          {}
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} TiendaQUEA | Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;