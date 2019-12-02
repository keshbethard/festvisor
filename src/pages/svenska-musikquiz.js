import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Svenska musikquiz » Quizar med endast svenska låtar"
      description="Ute efter en musikquiz med endast svensk musik? Våra svenska musikquiz innehåller endast låtar på svenska från våra bästa artister!"
    />

    <div className="block">
      <h1>Svenska musikquiz</h1>
      <p>Musikquizar med låtar från utländska artister må vara bra men inget går upp emot en musikquiz med svenska låtar. Här inne finner musikquiz med svenska artister som Carola, Petter, Peps Persson  och många fler. Allt från nya låtar till gamla klassiker för att göra utmaningen så mångsidig som möjligt. Trots att vi i Sverige är bortskämda med flera världsartister så är det endast låtar på svenska i våra musikquiz. Ifall du missat vår introduktion av våra muqikquizar så har vi skapat listor i spotify om du enkelt kan lägga till genom att klicka på spotify ikonen. Under varje lista ser du vilken svårighetsgrad listan har så är du ute efter ett quiz som även icke musiknördar klarar av bör du hålla dig till medel eller lätt. Det går dock även spela de svåra men där kan det finnas fler låtar som inte är så kända. Eller varför inte lägga till flera muiskquiz spellistor till din spotify och blanda mellan det svenska musikquizen och någon annan musikquiz, möjligheterna är många med våra musikquizar!</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla svenska musikfrågesport</h2>
      </div>

      {/* Håkan Hellström */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Håkan Hellström</h4>
          <a href="https://open.spotify.com/playlist/05NSLbSmpzs35jIiECtkpi?si=wdGOLizETom6vdzNfKDH0w" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Håkan Hellström - Aprilhimlen</li>
          <li>Håkan Hellström - Du är snart där</li>
          <li>Håkan Hellström - Känn ingen sorg för mig Göteborg</li>
          <li>Håkan Hellström - Augusti i helvetet</li>
          <li>Håkan Hellström - Pistol</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
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

    </div>
  </Layout>
)

export default IndexPage
