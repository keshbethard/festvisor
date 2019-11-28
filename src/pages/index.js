import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import musikquizBarn from '../images/musikquiz-for-barn.jpg'
import popularaMusikquiz from '../images/populara-musikquiz.jpg'
import rockMusikquiz from '../images/rock-musikquiz.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Hem" />
    <div className="front-blocks">
      <div className="block-head">
        <h2>Musikquiz</h2>
        <Link to="/musikquiz/">Se alla kategorier</Link>
      </div>
      <div className="block-column one">
        <img src={popularaMusikquiz} alt="Populära musikquiz" title="Populära musikquiz" />
        <h4>Populära musikquiz</h4>
        <p>Hur uppdateradade är ni om dagens musik?</p>
      </div>
      <div className="block-column two">
        <Link to="/musikquiz-rock/"><img src={rockMusikquiz} alt="Musikquiz rock" title="Musikquiz rock" /></Link>
        <h4>Musikquiz rock</h4>
        <p>Ut pretium erat quis est ultrices, ut aliquet lacus tempus.</p>
      </div>
      <div className="block-column three">
        <img src={musikquizBarn} alt="Musikquiz för barn" title="Musikquiz för barn" />
        <h4>Musikquiz för barn</h4>
        <p>Ut pretium erat quis est ultrices, ut aliquet lacus tempus.</p>
      </div>
    </div>

    <div className="block main">
      <div className="main-wrapper">
        <h2>Visor för alla</h2>
        <p>Tusentals sånger och visor för alla tillfällen.</p>
      </div>
    </div>

    <div className="front-blocks">
      <div className="block-head">
        <h2>Snapsvisor</h2>
        <Link to="/snapsvisor/">Se alla snapsvisor</Link>
      </div>
      <div className="block-column one">
        <h4>Populära snapsvisor</h4>
        <ul>
          <li>Helan går</li>
          <li>Sån är spriten</li>
          <li>Lille sup</li>
          <li>Idas (mid)sommarvisa</li>
          <li>Lambo</li>
          <li>Till spritbolaget</li>
          <li>Dom nubbarna</li>
          <li>Imse Vimsig</li>
          <li>Min sup den har sin fyllning</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
      <div className="block-column two">
        <h4>Mest sedda snapsvisor</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
      <div className="block-column three">
        <h4>Nya snapsvisor</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
    </div>

    <div className="block">
      <h1>Välkommen till festvisor</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
      <h3>Tjolojo</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et.</p>
    </div>

    <div className="block main">
      <div className="main-wrapper">
        <h2>Musikfrågesport</h2>
        <p>Testa era kunskap med härliga musikquiz på Spotify.</p>
      </div>
    </div>

    <div className="block">
      <h2>Välkommen till festvisor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
      <h3>Tjolojo</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et.</p>
    </div>
  </Layout>
)

export default IndexPage
