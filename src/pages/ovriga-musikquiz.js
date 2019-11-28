import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Övriga musikquiz" />
    <div className="block">
      <h1>Övriga musikquiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla övriga musikquiz</h2>
      </div>

      {/* TV-serier */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>TV-serier</h4>
          <a href="https://open.spotify.com/playlist/1PkKht4iIu6msL5bqba46I?si=F6wOG8n0QzGmTrHpzyft9Q" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Stranger Things - Main Title</li>
          <li>Friends - I'll Be There For You</li>
          <li>Game Of Thrones - Main Title</li>
          <li>Band of Brothers - Main Title</li>
          <li>Breaking Bad - Main Title</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
      </div>

      {/* Film */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Film</h4>
          <a href="https://open.spotify.com/playlist/6qat2IsHK5SsVgcoQcNrqJ?si=zxwWx1XOQdOz7BJMJJv72Q" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>The Last Of The Mohicans - The Kiss</li>
          <li>Gladiator - Now We Are Free</li>
          <li>The Dark Knight Rises - Rise</li>
          <li>The Hobbit - The Desolation Of Smaug - I See Fire</li>
          <li>Jurrasic Park - Theme</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty medium">Medium</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
