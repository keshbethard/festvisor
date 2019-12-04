import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Musikquiz för äldre » Fler Quiz med gamla godingar!"
      description="Flera musikquiz för äldre med låtar från förr är vad som listas här! Ta reda på vem i gänget som har bäst koll på musiken från förr!"
    />
    <div className="block">
      <h1>Musikquiz för äldre</h1>
      <p>Vad vore en samling av musikquiz om man inte hade en samling musikquiz för äldre. I våra musikquiz för äldre har vi samlat den bästa musiken från 60,70,80 och 90 talet. Så här gäller det att man kan sin musik om man ska ha en chans att vinna. En variation av klassiska Elvis låtar till Lotta Engbergs hits och många fler stora artister är vad som väntas här. Vi utlovar en fantastisk kul tävling och allt du behöver för att kunna anordna en är musiktjänsten Spotify. Har du inte den själv så är det garanterat någon av gästerna som har den. För att lägga till våra musikquiz för äldre behöver du bara klicka på Spotify symbolen som finns på varje quiz. Svårare än så är det inte! I äldre sällskap vet vi även att det oftast handlar om middagar när det är fest. Och vid sådana middagar förekommer ofta snapsen. Så ta även en titt på vår genialt utvecklade samling av <Link to="/snapsvisor/">snapsvisor</Link>. Där kan du skapa ditt eget häfte med alla dina favorit snapsvisor och skriva ut det direkt.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla musikquiz för äldre</h2>
      </div>

      {/* 70-tals disco */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>70-tals disco</h4>
          <a href="https://open.spotify.com/playlist/6iuhEmwlCa9k3MoOLRy2Kp?si=zH59hTh5RHCttYNUMKU_4Q" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Kool & The Gang - Celebration</li>
          <li>KC & The Sunshine Band - Give it Up</li>
          <li>Earth, Wind & Fire - September</li>
          <li>The Jackson 5 - Dancing Machine</li>
          <li>ABBA - Waterloo</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
      </div>

      {/* The Beatles */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>The Beatles</h4>
          <a href="https://open.spotify.com/playlist/3WxmF5suxpge1T5hJjp0js?si=RnzfCL9ERI6Uj9XAW8F5WQ" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>The Beatles - Come Together</li>
          <li>The Beatles - In My Life</li>
          <li>The Beatles - Twist And Shout</li>
          <li>The Beatles - Blackbird</li>
          <li>The Beatles - Here Comes The Sun</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
