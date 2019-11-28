import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Svenska musikquiz" />
    <div className="block">
      <h1>Svenska musikquiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
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
