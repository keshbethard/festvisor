import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"

class Midsommar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <SEO title="Snapsvisor midsommar" />

        <div className="block">
          <h1>Snapsvisor midsommar</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
        </div>
    
        <Categories />

        <Visor category="midsommar" />

        <div className="block">
          <h2>Snapsvisor midsommar</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
          <h3>Nubbar</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et.</p>
        </div>
      </Layout>
    )
  }
}

export default Midsommar
