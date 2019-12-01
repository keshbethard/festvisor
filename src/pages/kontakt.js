import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import iconFacebook from '../images/festvisor-facebook.png'
import iconInstagram from '../images/festvisor-instagram.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <div className="block">
        <h1>Kontakt</h1>
        <p>Har du några frågor eller problem? Har du idéer eller förslag som du vill dela med dig med oss? Vill du hitta någotslags sammarbete? Tveka aldrig att höra av dig till oss så besvarar vi så fort vi bara kan!</p>
        <h2>Adress</h2>
        <p>Epost: info@festvisor.se</p>
        <h2>Företag</h2>
        <p>ICSU Media - Handelsbolag<br/>Org.Nr. 969791-2971</p>
        <h2>Sociala medier</h2>
        <img className="social-media-icons" src={iconFacebook} alt="Facebook" title="Festvisor på Facebook" />
        <img className="social-media-icons" src={iconInstagram} alt="Instagram" title="Festvisor på Instagram" />
    </div>
  </Layout>
)

export default IndexPage
