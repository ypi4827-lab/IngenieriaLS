import React from 'react';
import '../estilos/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>
          © {new Date().getFullYear()} Ingeniería LS. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
