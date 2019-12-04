import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Musikquiz Jul » Perfekt efter Kalle!" 
      description="Få tiden på julafton att gå lite fortare med ett av våra musikquiz med julmusik! Vem kan flest populära film, radio och tv jullåtar i gänget."
    />

    <div className="block">
      <h1>Musikquiz jul</h1>
      <p>Välj bland någon av våra grymma musikquizar till jul. Spellistorna är fullproppade med de bästa och vanligaste julmusiken. Att köra en musikquiz även på julafton har blivit allt vanligare då detta är ett perfekt sätt att få tiden att gå även på julafton. Även om julen är högtiden man aldrig kan få nog av så är det även dagen på året som känns allra längst. Det spelas jullåtar så gott som överallt under hela december så dessa musikquizarna skall inte vara några problem att bemästra. Har ni inte provat att köra en musikquiz med jullåtar tidigare så tycker vi ni borde göra det redan i år! Vi har till och med lagt till spellistor med låtar som även barnen kan så att alla kan vara med. God Jul!<br/>
      Glöm inte bort att kolla in våra <Link to="/snapsvisor-jul/">snapsvisor till jul</Link> också. Där finner du ett stort antal snapsvisor som passar perfekt vid julbordet. Och du har möjligheten att skapa ett eget häfte på bara ett par minuter.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla musikquiz till jul</h2>
      </div>

      {/* Svenska julsånger */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Svenska julsånger</h4>
          <a href="https://open.spotify.com/playlist/3eqdfDr9Hsj3f1yJoLNnGR?si=vTC6qQu0RSKRpKKnRqAL_A" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Just D - Juligen</li>
          <li>Troll - Jag såg mamma kyssa tomten</li>
          <li>Adolphson & Falk - Mer jul</li>
          <li>Triad - Tänd ett ljus</li>
          <li>Carola - Nu tändas tusen juleljus</li>
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
