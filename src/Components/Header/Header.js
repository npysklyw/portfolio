import "./Header.css";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const NAV = [
  { label: "About", href: "#about", external: false },
  { label: "Experience", href: "#experience", external: false },
  { label: "Projects", href: "#projects", external: false },
  {
    label: "GitHub ↗",
    href: "https://github.com/npysklyw",
    external: true,
  },
  {
    label: "Résumé ↗",
    href: "https://drive.google.com/file/d/1SdOmIaka-_Q4uavGnum6Gca0xCi_Oemt/view?usp=sharing",
    external: true,
  },
];

export function Header() {
  return (
    <header className="masthead">
      <div className="masthead-top">
        <div className="masthead-dateline">
          Toronto, Canada &nbsp;·&nbsp; Software Developer
        </div>
        <div className="masthead-name">Nicholas Pysklywec</div>
        <div className="masthead-avail">
          <ThemeToggle variant="masthead" />
        </div>
      </div>
      <nav className="masthead-nav" aria-label="Primary">
        {NAV.map(({ label, href, external }) =>
          external ? (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ) : (
            <a key={label} href={href}>
              {label}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
