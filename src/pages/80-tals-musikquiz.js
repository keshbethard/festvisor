import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="80-tals musikquiz" />
    <div className="block">
      <h1>80-tals musikquiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla 80-talets musikquiz</h2>
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
          <div>Skapad av: <strong>Andreas S.</strong></div>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
