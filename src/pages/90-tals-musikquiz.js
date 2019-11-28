import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="90-tals musikquiz" />
    <div className="block">
      <h1>90-tals musikquiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla 90-talets musikquiz</h2>
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

    </div>
  </Layout>
)

export default IndexPage
