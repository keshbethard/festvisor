import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import iconFacebook from '../images/festvisor-facebook.png'

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
        <a href="https://www.facebook.com/Festvisor-101868341298967/" target="_blank"><img className="social-media-icons" src={iconFacebook} alt="Facebook" title="Festvisor på Facebook" /></a>
    </div>
  </Layout>
)

export default IndexPage
