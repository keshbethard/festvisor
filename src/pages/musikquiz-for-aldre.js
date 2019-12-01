import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Musikquiz för äldre" />
    <div className="block">
      <h1>Musikquiz för äldre</h1>
      <p>Vad vore en samling av musikquiz om man inte hade en samling musikquiz för äldre. I våra musikquiz för äldre har vi samlat den bästa musiken från 60,70,80 och 90 talet. Så här gäller det att man kan sin musik om man ska ha en chans att vinna. En variation av klassiska Elvis låtar till Lotta Engbergs hits och många fler stora artister är vad som väntas här. Vi utlovar en fantastisk kul tävling och allt du behöver för att kunna anordna en är musiktjänsten Spotify. Har du inte den själv så är det garanterat någon av gästerna som har den. För att lägga till våra musikquiz för äldre behöver du bara klicka på Spotify symbolen som finns på varje quiz. Svårare än så är det inte! I äldre sällskap vet vi även att det oftast handlar om middagar när det är fest. Och vid sådana middagar förekommer ofta snapsen. Så ta även en titt på vår genialt utvecklade samling av <Link to="/snapsvisor/">snapsvisor</Link>. Där kan du skapa ditt eget häfte med alla dina favorit snapsvisor och skriva ut det direkt.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla musikquiz för äldre</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
