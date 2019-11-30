import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"
import data from '../components/utilities/snapsvisor'

class Midsommar extends React.Component {
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
        <SEO title="Snapsvisor nyår" />

        <div className="block">
          <h1>Snapsvisor nyår</h1>
          <p>Nyårsfesten är här och det är dax att först trängas på bolaget för att sedan trängas i målaraffären för att köpa raketer. Skjortan och kostymen skall strykas och andra förberedelser skall göras. Festen består som andra högtider av en praktfull måltid där det dricks alla möjliga sorters drycker med alkohol i. Och som vid andra tillfällen står snapsen på bordet och vi sjunger nyårssnapsvisor mellan tuggorna och nubbarna går ner en efter en. Eftersom vi på festvisor tycker det är väldigt trevligt med snapsvisor så har vi samlat de bästa snapsvisorna till nyår här. Ett snyggt sätt att göra så alla på festen är med och sjunger och ingen lämnas utanför. Meningen med snapsvisor till nyår är att det skall fungera som en stämningshöjare vid matbordet. En glädjespridare så att säga, alla sjunger med och den som vill tar en nubbe efteråt. Så vad väntar du på! Skapa din egna häfte med snapsvisor till nyår nu direkt! Allt du behöver göra är att klicka på plustecknet i hörnet på varje snapsvisa, så skapas ett häfte som du sedan kan skriva ut. Snabbt, snygg och enkelt! Precis så som det ska vara. Lycka till och sjung som bara den!</p>
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

        <Visor category="nyar" checkout={this.checkout} />

        <div className="block">
          <h2>Nyår & nyårsfesten</h2>
          <p>Nyår är den högtid vi i Sverige spenderar fruktansvärt mycket pengar på. Det handlas alkoholhaltiga drycker, kläder och framförallt massor av raketer bara för denna högtid. Vilket i sin tur gör denna högtid väldigt exklusiv. Till nyårsfesten klär folk upp sig mer än vanligt då klädkoden oftast är glammig klädsel. Detta gäller även dukningen till nyårsmiddagen, man tar fram det fina för att duka bordet med. Till maten dricker man öl, vin och snaps och sjunger snapsvisor med nyårstema. En proper middag med en härlig stämning och massor av sång i form av snapsvisor. Precis så det skall vara när man firar högtider i Sverige.<br/>
          När klockan slår tolv kommer det alla väntat på för då är det dax att skjuta raketer och fira in det nya året. Folk samlas på gatorna och himlen lyses upp av raketer. Det skålas med Champagne och den som har en käraste kysser henne/honom för att bringa lycka till kommande år. När det nya året är färdig firat utomhus så fortsätter festen inomhus tills sent på natten.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Midsommar
