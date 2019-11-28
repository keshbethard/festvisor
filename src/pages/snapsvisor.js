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
          <p>Här på festvisor så uppskattar vi en festmiddag med det där lilla extra och framförallt middagar med snaps och snapsvisor. Därför har vi gjort en samlingssida med massor av visor. I våran samling finner ni snapsvisor till samtliga högtider, ett stort urval av jul- ,nyår- och påsksnapsvisor, men även till kräftskivan och midsommar. Visst kan det verka lite konstigt att göra en hemsida full av snapsvisor men vi tror det är många som uppskattar det. För vi har själva varit på flera bjudningar och firat flera högtider där snapsen är på bordet och det har saknats ett häfte. Visornas kvalité har varit både bra och dåliga ibland till och med bara ett par ord “Tystnad! Tagning.” Vilket vi tycker känns lite snålt då det är väldigt trevligt att sjunga riktiga nubbevisor och inte bara säga ett par ord och sedan ta snapsen.</p>
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
          <h2>Snaps</h2>
          <p>Drycken snaps har funnits med i över tusen år och är en mindre volym av brännvin. Den serveras i mindre glas och standardmåttet för en snaps är idag ca. 6 cl. Men det finns så klart undantag som den danska snapsen “en lille” där det kan handla om så lite som 1 cl. Dessa förekommer dock inte särskilt ofta.<br/>
          Förr i tiden fanns det snapsar och nubbevisor som dracks och sjöngs i ordning. Ett tag fanns det en standard på hela 17 st snapsar som skulle hävas under en och samma bjudning. Helan, Halvan, Tersen, Kvarten och ett gäng till fanns med bland dessa snapsar. Det är tack vare denna listan på snapsar som vi än idag sjunger Helan Går och Halvan visorna. Som tur är har traditionen av snaps minskat i antal och det är idag inte lika vanligt med rejäla snapsbleckor. Idag finner vi först och främst snapsen på bordet vid högtider som påsk, midsommar, jul och nyår. Men den förekommer även vid andra tillfällen också. Snaps finns i massor av utföranden, somliga är kryddade andra är renat brännvin. Det har också blivit allt vanligare att man tillverkar sin egen snaps hemma. Där du smaksätter brännvinet själv med smaker du tycker om.</p>
          <h3>Tanken bakom en sida om snapsvisor</h3>
          <p>Som vi skriver på förstasidan så är allt innehåll på festvisor.se helt gratis. Tanken med att vi skapat denna hemsidan är att vi vill hjälpa andra att enkelt kunna skapa häften med snapsvisor eller anordna ett musikquiz. Vi har själva sökt efter nubbevisor när vi skall ha bjudningar, men tycker inte utbudet har varit bra. Det känns klumpigt att själva behöva kopiera och klistra in alla visorna och göra ett dokument själva. Därför har vi skapat funktionen att du skall kunna göra ditt eget snapshäfte här och skriva ut det. Innehållet och titeln på häftet bestämmer du själv. Klicka plusset på alla visor du vill ha i ditt häfte så sparas dem och är redo att skrivas ut. Tänk på att i dagsläget går det endast spara visor från en kategori så om du vill skriva ut från flera olika bör du välja dem i kategorin alla snapsvisor.</p>
        </div>
      </Layout>
    )
  }
}

export default Snapsvisor
