import React from "react"
import { Link } from "gatsby"

import "./footer.scss"

import iconFacebook from '../../images/festvisor-facebook.png'
import iconInstagram from '../../images/festvisor-instagram.png'

const Footer = () => (
  <footer>
    <div className="wrapper">
      <div className="columns">
        <div className="column">
          <h4>Om oss</h4>
          <p>festvisor.se är Sveriges största samlingsplats för snapsvisor och musikquiz på nätet. Vi har över en miljon unika besökare varje månad.</p>
        </div>
        <div className="column">
          <h4>Information</h4>
          <ul>
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/bidra">Bidra</Link></li>
            <li><Link to="/annonsering">Annonsera här</Link></li>
            <li><Link to="/cookiepolicy">Cookiepolicy</Link></li>
            <li><Link to="/om-oss">Mer om oss</Link></li>
          </ul>
        </div>
        <div className="column">
          <h4>Övrigt</h4>
          <ul>
            <li><Link to="/sitemap">Sitemap</Link></li>
            <li><Link to="/bidra">Bidra</Link></li>
            <li><Link to="/annonsering">Annonsera här</Link></li>
            <li><Link to="/cookiepolicy">Cookiepolicy</Link></li>
            <li><Link to="/om-oss">Mer om oss</Link></li>
          </ul>
        </div>
        <div className="column">
          <h4>Följ oss</h4>
          <img src={iconFacebook} alt="Facebook" title="Festvisor på Facebook" />
          <img src={iconInstagram} alt="Instagram" title="Festvisor på Instagram" />
        </div>
      </div>

      <span className="copyright">© {new Date().getFullYear()} festvisor.se</span>
    </div>
  </footer>
)

export default Footer
