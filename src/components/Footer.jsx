import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Hakkımızda</h3>
          <p>
            Bu site, İbrahim Ethem Öztürk tarafından geliştirilen güncel haber platformudur.
            Teknoloji, sağlık, bilim ve daha fazlası burada!
          </p>
          <a href="https://iethem.com" target="_blank" rel="noopener noreferrer">
            Kişisel web sitem: <strong>iethem.com</strong>
          </a>
        </div>

        <div className="footer-links">
          <h3>Sayfalar</h3>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/about">Hakkımda</Link></li>
            <li><Link to="/category/technology">Teknoloji</Link></li>
            <li><Link to="/category/health">Sağlık</Link></li>
            <li><Link to="/category/science">Bilim</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Beni Takip Et</h3>
          <ul>
            <li>
              <a href="https://github.com/ibrahimEthemxd" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ibrahim-ethem-öztürk-7399a429a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://iethem.com" target="_blank" rel="noopener noreferrer">Kişisel Site</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} İbrahim Ethem Öztürk - Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
