import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="60-tals musikquiz" />
    <div className="block">
      <h1>60-tals musikquiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla 60-talets musikquiz</h2>
      </div>

      {/* The Beatles */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>The Beatles</h4>
          <a href="https://open.spotify.com/playlist/3WxmF5suxpge1T5hJjp0js?si=RnzfCL9ERI6Uj9XAW8F5WQ" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>The Beatles - Come Together</li>
          <li>The Beatles - In My Life</li>
          <li>The Beatles - Twist And Shout</li>
          <li>The Beatles - Blackbird</li>
          <li>The Beatles - Here Comes The Sun</li>
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
