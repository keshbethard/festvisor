import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="00-tals musikquiz" />
    <div className="block">
      <h1>00-tals musikquiz</h1>
      <p>Våra musikquiz från 2000 talet är våra personliga favoriter. Mycket tack vare att det har musik från nästa 20 år. Det är även de musikquizarna som är mest relevanta med tiden vi är i nu. En tävling som lätt får de tävlande att drömma sig tillbaka till dansgolvet för 10-15 år sedan där det pumpades klassiker som I’m Blue da-ba-di-da-ba-do och andra hits i högtalarna. Som sagt det är ett stort urval av musik från alla möjliga genrer här. Och du kommer känna igen massor av låtar som fortfarande spelas på radion. Självklart har vi slängt in en och annan dänga från 2018-19 också. Tycker du detta låter intressant så kan vi upplysa dig om att allt du behöver för att kunna anordna en våra musikquiz är Spotify. Varje lista har en Spotify-ikon, trycker du på den så lägger du till listan till din Spotify. Svårare än så är det inte och nu är det bara att köra igång. Så kommer detta bli en succé även för er!</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla 00-talets musikquiz</h2>
      </div>

      {/* 00-tals hiphop */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>00-tals hiphop</h4>
          <a href="https://open.spotify.com/playlist/06zxiM0gcbRrdzwrK4Bb22?si=p8bBEj8DREWDKoOEMXuJcA" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Nelly - Hot In Herre</li>
          <li>50 Cent - If I Can't</li>
          <li>Fat Joe - What's Luv?</li>
          <li>T.I. - Whatever You Like</li>
          <li>Jay Z - Hard Knock Life</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>Lisa S.</strong></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
