import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"
import data from '../components/utilities/snapsvisor'

class Pask extends React.Component {
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
          title="Snapsvisor påsk » Ta en snaps och sjung in påsken med oss!"
          description="Här finner du alla snapsvisor till påsk på ett och samma ställe. Klistra ihop ett eget häfte och skriv ut här hos oss!"
        />

        <div className="block">
          <h1>Snapsvisor påsk</h1>
          <p>April är påskens månad och du stöter på färgglada fjädrar överallt. Butiker pyntar sina butiker med påskpynt och hemmen fylls med fjädrar och kycklingar. Det är även nu som oftast solen och värmen börjar synas i vårt avlånga land. Så i regel är April och påsken en välkommen månad fylld av glädje. Påskmiddagen har en gemensam nämnare med alla andra svenska högtider och det är snapsen. Även vid påsk så finner vi snapsen på matbordet och det finns även snapsvisor till påsk. Istället för att sjunga om grodor eller lambos är de såklart påskrelaterade snapsvisor. Här på denna sida finner du just snapsvisor till påskfirandet. Här hittar du både vanliga och ovanliga snapsvisor och du kan enkelt skapa ditt egna häfte med påsksnapsvisor. Allt du behöver göra för att skapa ditt häfte med påsksnapsvisor är att trycka på plusset i snapsvisorna du vill ha så läggs de till i ett häfte som du sedan kan printa ut.</p>
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

        <Visor category="pask" checkout={this.checkout} />

        <div className="block">
          <h2>Påsk</h2>
          <p>Från allra första början så firar man påsk för att det var den tiden som Jesus dog och sedan återuppstod. Nuförtiden så är fokusen inte lika stor på det utan numera handlar det om kycklingar och ägg. En tid då familjen samlas för att umgås och göra olika påskaktiviteter som att måla ägg och sedan leta efter påskägg fyllda med godis. Detta är en högtid som barn älskar vilket är väldigt förståeligt då det är överflöd på godis vid denna högtid.<br/>
          Påskmiddagen är väldigt lik middagen vi äter vid jul. Många påskmiddagar innehåller skinka, ägg, potatis och någon form av macka eller knäckebröd. Många gånger äter man upp äggen man målat tidigare på dagen. Till maten avnjuter man gärna påskmust, öl och snaps. Och med snapsen kommer det såklart snapsvisor så det finns ett stort urval av snapsvisor till påsk som sjungs vid middagen. 
          </p>
        </div>
      </Layout>
    )
  }
}

export default Pask
