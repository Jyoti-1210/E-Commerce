import { Link } from "react-router-dom";
import "../index.css"; // make sure CSS is imported

function Footer() {
  return (
    <div style={{ backgroundColor: "#172337", color: "white" }} className="mt-5">

      <div className="container py-4">

        <div className="row">

          {/* ABOUT */}
          <div className="col-md-2">
            <h6 className="text-secondary">ABOUT</h6>

            <p><Link to="/contact" className="footer-link">Contact Us</Link></p>
            <p><Link to="/about" className="footer-link">About Us</Link></p>
            <p><Link to="/careers" className="footer-link">Careers</Link></p>
            <p><Link to="/press" className="footer-link">Press</Link></p>

          </div>

          {/* GROUP COMPANIES */}
          <div className="col-md-2">
            <h6 className="text-secondary">GROUP COMPANIES</h6>

            <p>
              <a href="https://www.myntra.com" target="_blank" rel="noreferrer" className="footer-link">
                Myntra
              </a>
            </p>

            <p>
              <a href="https://www.cleartrip.com" target="_blank" rel="noreferrer" className="footer-link">
                Cleartrip
              </a>
            </p>

            <p>
              <a href="https://www.shopsy.in" target="_blank" rel="noreferrer" className="footer-link">
                Shopsy
              </a>
            </p>

          </div>

          {/* HELP */}
          <div className="col-md-2">
            <h6 className="text-secondary">HELP</h6>

            <p><Link to="/payments" className="footer-link">Payments</Link></p>
            <p><Link to="/shipping" className="footer-link">Shipping</Link></p>
            <p><Link to="/returns" className="footer-link">Returns</Link></p>
            <p><Link to="/faq" className="footer-link">FAQ</Link></p>

          </div>

          {/* POLICY */}
          <div className="col-md-2">
            <h6 className="text-secondary">CONSUMER POLICY</h6>

            <p><Link to="/terms" className="footer-link">Terms Of Use</Link></p>
            <p><Link to="/security" className="footer-link">Security</Link></p>
            <p><Link to="/privacy" className="footer-link">Privacy</Link></p>
            <p><Link to="/sitemap" className="footer-link">Sitemap</Link></p>

          </div>

          {/* ADDRESS */}
          <div className="col-md-4">
            <h6 className="text-secondary">Mail Us:</h6>

            <p>
              Shopyxx Internet Private Limited,<br />
              Tech Village,<br />
              Saket, Delhi,<br />
              India
            </p>

            <h6 className="text-secondary mt-3">Registered Office:</h6>

            <p>
              Shopyxx Pvt Ltd,<br />
              Outer Ring Road,<br />
              Saket, Delhi,<br />
              India
            </p>

          </div>

        </div>

        <hr style={{ borderColor: "#555" }} />

        {/* BOTTOM BAR */}
        <div className="d-flex flex-wrap justify-content-between align-items-center">

          <div className="d-flex flex-wrap gap-3">

            <Link to="/seller-dashboard" className="footer-link">
              Become a Seller
            </Link>

            <Link to="/advertise" className="footer-link">
              Advertise
            </Link>

            <Link to="/gift-cards" className="footer-link">
              Gift Cards
            </Link>

            <Link to="/help" className="footer-link">
              Help Center
            </Link>

          </div>

          <div>© 2026 Shopyxx.com</div>

        </div>

      </div>
    </div>
  );
}

export default Footer;