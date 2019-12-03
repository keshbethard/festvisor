import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Musikquiz rock » Testa våra bästa rock quiz!" 
      description="Vem i gänget har bäst koll på rock? Testa det med ett av våra musikquiz med rock. Listor med både svensk och utländsk rock väntar!"
    />
    <div className="block">
      <h1>Musikquiz rock</h1>
      <p>Med flera låtar från band som spelat live på Sweden Rock i Norjeboke så kan vi garantera att ni kommer gilla våra musikquiz med rock. Tunga band som AC/DC, KIZZ, Iron Maiden med flera är alla inkluderade i våra rockmusik quiz. Rocken är den musikgenre som starkast förknippas med att dricka öl och ha det allmänt gott. Så varför inte lägga till en musikquiz med rock på nästa fest och se vem som är vassast i gänget! Varför inte rocka om reglerna lite med att första laget som når 5 poäng slipper halsa en bira. Då blir det helt plötsligt ännu viktigare att vinna tävling. För det må vara gott att ta en kall men att svepa en är inget man föredrar. Sådana här regler är inget måste utan bara ett exempel på att man kan mixtra själv med reglerna för att öka spänningen. Det går så klart utmärkt att tävla med vanliga regler också. Våra musikquizar är väldigt enkla att komma igång med. Med bara ett klick så lägger du till vår musikquiz spellista till din Spotify. Under varje lista finns det en spotify ikon du kan klicka på för att lägga till våran spellista. Förbaskat enkelt! Sedan är det bara bestämma reglerna du/ni vill köra.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla rock musikquiz</h2>
      </div>

      {/* 90-tals rock */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>90-tals rock</h4>
          <a href="https://open.spotify.com/playlist/1owvynh0mehMT9Kw0dxt9m?si=u3C9lkanTx-EpMUfC4FrzQ" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Weezer - Island In The Sun</li>
          <li>Nirvana - Lithium</li>
          <li>Red Hot Chili Peppers - This Velvet Glove</li>
          <li>Nine Inch Nails - Head Like A Hole</li>
          <li>Green Day - Welcome to Paradise</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty medium">Medium</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
      </div>

      {/* 80-tals rock */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>80-tals rock</h4>
          <a href="https://open.spotify.com/playlist/2itLLW7MjEn7YG6G8L03zE?si=8-k5ihyQTN-oghMqh1YQnw" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Bon Jovi - You Give Love A Bad Name</li>
          <li>Guns N' Roses - Welcome To The Jungle</li>
          <li>Mötley Crüe - Girls, Girls, Girls</li>
          <li>AC/DC - T.N.T.</li>
          <li>Twisted Sister - We're Not Gonna Take It</li>
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
