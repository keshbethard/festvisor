import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Msikquiz för barn" />
    <div className="block">
      <h1>Musikquiz för barn</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla musikquiz för barn</h2>
      </div>

      {/* Klassiker */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Klassiker</h4>
          <a href="https://open.spotify.com/playlist/48wCYwlaFgVO6Iu31Tga6C?si=LdSG_IajTC-hTlB1P5SLGg" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Alice Scherman - Idas sommarvisa</li>
          <li>Pinkfong - Babyshark</li>
          <li>The Beatles - Twist And Shout</li>
          <li>The Beatles - Blackbird</li>
          <li>The Beatles - Here Comes The Sun</li>
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
