import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const RESUME =
  "https://drive.google.com/file/d/1SdOmIaka-_Q4uavGnum6Gca0xCi_Oemt/view?usp=sharing";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" onClick={close}>
        <span className="wordmark-index">NP / 26</span>
        <span className="wordmark-location">Toronto</span>
      </Link>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      <nav
        id="site-nav"
        className={open ? "nav open" : "nav"}
        aria-label="Primary"
      >
        <NavLink to="/work" onClick={close}>
          Work
        </NavLink>
        <NavLink to="/about" onClick={close}>
          About
        </NavLink>
        <a href={RESUME} target="_blank" rel="noreferrer">
          Résumé ↗
        </a>
        <a href="https://github.com/npysklyw" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
