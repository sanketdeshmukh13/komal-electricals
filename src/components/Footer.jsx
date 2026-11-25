import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <span>K</span>
            <strong>KOMAL ELECTRICALS</strong>
          </Link>

          <p>
            Electrical panel manufacturing solutions focused on quality,
            reliability and customer requirements.
          </p>

          <span className="footer-location">
            <MapPin size={17} />
            Aurangabad, Maharashtra, India
          </span>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Our Products</h3>
          <Link to="/products/pcc-panel">PCC Panels</Link>
          <Link to="/products/mcc-panel">MCC Panels</Link>
          <Link to="/products/apfc-panel">APFC Panels</Link>
          <Link to="/products/lt-panel">LT Panels</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <a href="tel:+910000000000">
            <Phone size={17} /> Add Phone Number
          </a>

          <a href="mailto:info@komalelectricals.com">
            <Mail size={17} /> Add Business Email
          </a>

          <Link to="/get-a-quote" className="footer-quote">
            Request a Quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Komal Electricals. All Rights Reserved.
        </p>
        <p>Designed for Industrial Excellence.</p>
      </div>
    </footer>
  );
}

export default Footer;
