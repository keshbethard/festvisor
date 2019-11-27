import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"
import data from '../components/utilities/snapsvisor'

class Snapsvisor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutItems: []
    };
  }

  checkout = checkoutItems => {
    this.setState({ 
      checkoutItems: checkoutItems,
    })
  }

  print = () => {
      const url = '/skriv-ut?visor=' + this.state.checkoutItems;
      window.open(url, '_blank');
  }

  render() {
    var result = '';

    if (this.state.checkoutItems.length > 0) {
      result = data.filter(({id}) => this.state.checkoutItems.includes(id));
    }

    return (
      <Layout>
        <SEO title="Snapsvisor" />

        <div className="block">
          <h1>Snapsvisor</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
        </div>
    
        <Categories />

        {result.length > 0 && (
          <div className="checkout">
              {result.map(item => (
                <span className="name" key={item.id}>
                  {item.name}
                </span>
              ))}
              <button onClick={this.print}>Skriv ut</button>
          </div>
        )}

        <Visor category="alla" checkout={this.checkout} />

        <div className="block">
          <h2>Snapsvisor till alla tillfällen</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
          <h3>Nubbar</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et.</p>
        </div>
      </Layout>
    )
  }
}

export default Snapsvisor
