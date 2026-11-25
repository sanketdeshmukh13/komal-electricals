import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="site-header">
      <div className="navbar-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="logo-symbol">K</div>
          <div className="brand-text">
            <strong>KOMAL</strong>
            <span>ELECTRICALS</span>
          </div>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}

          <Link to="/get-a-quote" className="nav-quote-btn" onClick={closeMenu}>
            Get a Quote <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
