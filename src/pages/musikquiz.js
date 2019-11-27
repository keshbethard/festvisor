import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import musikquizBarn from '../images/musikquiz-for-barn.jpg'
import popularaMusikquiz from '../images/populara-musikquiz.jpg'
import klassiskaMusikquiz from '../images/klassiska-musikquiz.jpg'

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
        <img src={popularaMusikquiz} alt="Smartval.nu" title="Smartval.nu" />
        <h4>Populära musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={klassiskaMusikquiz} alt="Smartval.nu" title="Smartval.nu" />
        <h4>Svenska musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={musikquizBarn} alt="Smartval.nu" title="Smartval.nu" />
        <h4>Musikquiz för barn</h4>
      </div>
      <div className="music-block-column">
        <img src={popularaMusikquiz} alt="Smartval.nu" title="Smartval.nu" />
        <h4>10-talet musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={klassiskaMusikquiz} alt="Smartval.nu" title="Smartval.nu" />
        <h4>00-talet musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={musikquizBarn} alt="Smartval.nu" title="Smartval.nu" />
        <h4>90-talet musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={popularaMusikquiz} alt="Smartval.nu" title="Smartval.nu" />
        <h4>80-talet musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={klassiskaMusikquiz} alt="Smartval.nu" title="Smartval.nu" />
        <h4>70-talet musikquiz</h4>
      </div>
      <div className="music-block-column">
        <img src={musikquizBarn} alt="Smartval.nu" title="Smartval.nu" />
        <h4>60-talet musikquiz</h4>
      </div>
    </div>
  </Layout>
)

export default IndexPage
