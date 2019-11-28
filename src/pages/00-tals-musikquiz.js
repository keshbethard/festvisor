import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="00-tals musikquiz" />
    <div className="block">
      <h1>00-tals musikquiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
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
