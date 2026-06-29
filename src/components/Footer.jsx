export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-quote">
          Learning deeply. Building thoughtfully. Growing continuously.
        </p>
        <p className="footer-made">
          Made with <span style={{ color: '#e63946' }}>❤</span> by Sakshi Gaikwad
        </p>
        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Sakshi Gaikwad
          </span>
        </div>
      </div>
    </div>
  )
}
