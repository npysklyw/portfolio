export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">Get in touch</p>
        <h2>Let’s build something useful.</h2>
      </div>
      <div className="footer-links">
        <a href="mailto:nicholas.pysklywec@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/nick-py/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a href="https://github.com/npysklyw" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <p>
          Toronto, Canada
          <br />© {new Date().getFullYear()} Nicholas Pysklywec
        </p>
      </div>
    </footer>
  );
}
