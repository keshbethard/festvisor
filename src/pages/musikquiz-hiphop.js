import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Musikquiz HipHop » Testa våra bästa HipHop Quiz!"
      description="Vem i gänget har bäst koll på hiphop? Testa det med ett av våra musikquiz med hiphop. Listor med både svensk och utländsk hiphop väntar!"
    />

    <div className="block">
      <h1>Musikquiz hiphop</h1>
      <p>Vad sägs om en hiphop musikquiz med tunga hiphopartister som Snoop Dogg, Nas eller svenska Petter? Här finner du olika musikquizar med blandade hiphoplåtar. Listorna innehåller en blandning av både nya och gamla låtar. Hiphop låtar gjorda av svenska eller utländska artister, ja en hel massa Musikquiz med hiphop musik. Denna genre är så pass stor och har spelats i radio och tv genom alla år så dessa musikquizarna är inte endast för folk som älskar hiphop. Med undantag för de med högre svårighetsgrad, där kan det vara låtar som endast de inbitna kan. Som tur är finns det ett gott urval av listor med lägre svårighetsgrad så alla kan vara med. Vi kan också tipsa om våra andra listor för det är inte alltid att alla på festen gillar hiphop och eftersom ett musikquiz går relativt fort går det köra flera. För att lägga till spellistan till din spotify behöver du bara klicka på spotifylogon. Lycka till!</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla hiphop musikquiz</h2>
      </div>

      {/* 90-tals hiphop */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>90-tals hiphop</h4>
          <a href="https://open.spotify.com/playlist/4yzc6JexMNhmDuqIN6H4o0?si=fh2TmPxbQXeBN5WxtPIs8A" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Gang Starr - Work</li>
          <li>Mobb Deep - Survival of the Fittest</li>
          <li>Wu-Tang Clan - C.R.E.A.M.</li>
          <li>The Notorious B.I.G. - Who Shot Ya?</li>
          <li>Nas - N.Y. State of Mind</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>Jakob N.</strong></div>
        </div>
      </div>

      {/* Svensk hiphop */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Svensk hiphop</h4>
          <a href="https://open.spotify.com/playlist/0LnvR4QdpEKeRV5ygc4EZM?si=P6HdEzF4R62Bq03hi-nFQQ" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Movits! - Dansa i regnet</li>
          <li>Erik Lundin - Jag Räcker</li>
          <li>Timbuktu - Strö lite socker på mig</li>
          <li>Petter - Repa skivan</li>
          <li>Maskinen - Upp</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
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
