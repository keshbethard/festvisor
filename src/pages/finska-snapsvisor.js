import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"
import data from '../components/utilities/snapsvisor'

class Finska extends React.Component {
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
        <SEO 
          title="Finska snapsvisor » Bästa snapsvisorna från Finland"
          description="Lägg till finska snapsvisor i ditt häfte idag! Vi har samlat alla de mest populära snapsvisorna här!"
        />

        <div className="block">
          <h1>Finska snapsvisor</h1>
          <p>Här finner du en härlig blandning av finska snapsvisor av bästa kvalité. För har vi tagit med våra grannar i söder så kan vi inte lämna våra grannar i norr utanför. De flesta svenskar vet vad <strong>Ei saa peittää</strong> och <strong>Tomaattiketsuppi</strong> betyder, men har du någonsin provat på finska snapsvisor? Om du aldrig har gjort det har du missat något. Finska snapsvisor bjuder på hysteriska skratt och kan fungera som ett ess i rockärmen när det kommer till roliga snapsvisor. Överraska dina vänner med något nytt vid nästa sammankomst, vi lovar det kommer uppskattas! Och ännu bättre blir det ifall någon vän kan finska och kan briljera under dessa visor. För finnarna är väldigt duktiga på att marknadsföra sig som hårda och att de dricker vodka istället för vatten. Klicka på ikonen uppe i högra hörnet för att lägga till dina finska snapsvisor i ditt häfte. Ifall du tycker det är någon riktigt bra snapsvisa på finska som vi missat får ni gärna skicka in den till oss.</p>
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

        <Visor category="finska" checkout={this.checkout} />
      </Layout>
    )
  }
}

export default Finska
