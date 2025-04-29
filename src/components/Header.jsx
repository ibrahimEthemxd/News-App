import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setQuery("");
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/category/business", label: "Business" },
    { path: "/category/entertainment", label: "Entertainment" },
    { path: "/category/general", label: "General" },
    { path: "/category/health", label: "Health" },
    { path: "/category/science", label: "Science" },
    { path: "/category/sports", label: "Sports" },
    { path: "/category/technology", label: "Technology" },
    { path: "/about", label: "About" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-top">
          <Link to="/" className="name-link">
            İBRAHİM ETHEM ÖZTÜRK
          </Link>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        </div>

        {/* Masaüstü menü */}
        <nav className="nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
