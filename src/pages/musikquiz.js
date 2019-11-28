import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import musikquizBarn from '../images/musikquiz-for-barn.jpg'
import popularaMusikquiz from '../images/populara-musikquiz.jpg'
import svenskaMusikquiz from '../images/svenska-musikquiz.jpg'
import zerotiesMusikquiz from '../images/00-talet-musikquiz.jpg'
import ninetiesMusikquiz from '../images/90-talet-musikquiz.jpg'
import eightiesMusikquiz from '../images/80-talet-musikquiz.jpg'
import seventiesMusikquiz from '../images/70-talet-musikquiz.jpg'
import sixtiesMusikquiz from '../images/60-talet-musikquiz.jpg'
import rockMusikquiz from '../images/rock-musikquiz.jpg'
import hiphopMusikquiz from '../images/hiphop-musikquiz.jpg'
import ovrigtMusikquiz from '../images/ovrigt.jpg'


const IndexPage = () => (
  <Layout>
    <SEO title="Musikquiz" />
    <div className="block">
      <h1>Musikquiz</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
    </div>
    <div className="music-blocks">
      <div className="music-block-head">
        <h2>Kategorier</h2>
      </div>
      <div className="music-block-column">
        <img src={popularaMusikquiz} alt="Populära musikquiz" title="Populära musikquiz" />
        <h4>Populära musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={svenskaMusikquiz} alt="Svenska musikquiz" title="Svenska musikquiz" />
        <h4>Svenska musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={musikquizBarn} alt="Musikquiz för barn" title="Musikquiz för barn" />
        <h4>Musikquiz för barn</h4>
      </div>
      <div className="music-block-column">
        <img src={zerotiesMusikquiz} alt="00-talet musikquiz" title="00-talet musikquiz" />
        <h4>00-talet musikquiz</h4>
      </div>
      <Link to="/90-tals-musikquiz/" className="music-block-column">
        <img src={ninetiesMusikquiz} alt="90-talet musikquiz" title="90-talet musikquiz" />
        <h4>90-tals musikquiz</h4>
      </Link>
      <Link to="/80-tals-musikquiz/" className="music-block-column">
        <img src={eightiesMusikquiz} alt="80-talet musikquiz" title="80-talet musikquiz" />
        <h4>80-talet musikquiz</h4>
      </Link>
      <div className="music-block-column">
        <img src={seventiesMusikquiz} alt="70-talet musikquiz" title="70-talet musikquiz" />
        <h4>70-talet musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={sixtiesMusikquiz} alt="60-talet musikquiz" title="60-talet musikquiz" />
        <h4>60-talet musikquiz</h4>
      </div>
      <Link to="/musikquiz-rock/" className="music-block-column">
        <img src={rockMusikquiz} alt="Rock musikquiz" title="Rock musikquiz" />
        <h4>Rock musikquiz</h4>
      </Link>
      <Link to="/musikquiz-hiphop/"className="music-block-column">
        <img src={hiphopMusikquiz} alt="HipHop musikquiz" title="HipHop musikquiz" />
        <h4>HipHop musikquiz</h4>
      </Link>
      <Link to="/ovriga-musikquiz/" className="music-block-column">
        <img src={ovrigtMusikquiz} alt="Övrigt" title="Övrigt" />
        <h4>Övrigt</h4>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
