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
          <p>festvisor.se är en av Sveriges största samlingsplats för snapsvisor och musikquiz på nätet.</p>
        </div>
        <div className="column">
          <h4>Information</h4>
          <ul>
            <li><Link to="/kontakt/">Kontakt</Link></li>
            <li><Link to="/bidra/">Bidra</Link></li>
            <li><Link to="/cookiepolicy/">Cookiepolicy</Link></li>
          </ul>
        </div>
        <div className="column">
          <h4>Snabbmeny</h4>
          <ul>
            <li><Link to="/snapsvisor/">Snapsvisor</Link></li>
            <li><Link to="/musikquiz/">Musikquiz</Link></li>
          </ul>
        </div>
        <div className="column">
          <h4>Följ oss</h4>
          <a href="https://www.facebook.com/Festvisor-101868341298967/" target="_blank"><img src={iconFacebook} alt="Facebook" title="Festvisor på Facebook" /></a>
        </div>
      </div>

      <span className="copyright">© {new Date().getFullYear()} festvisor.se</span>
    </div>
  </footer>
)

export default Footer
