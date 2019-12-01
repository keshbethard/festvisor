import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="70-tals musikquiz" />
    <div className="block">
      <h1>70-tals musikquiz</h1>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla 70-talets musikquiz</h2>
      </div>

      {/* Disco */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Disco</h4>
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

    </div>
  </Layout>
)

export default IndexPage
