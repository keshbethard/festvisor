import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"
import data from '../components/utilities/snapsvisor'

class Populara extends React.Component {
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
          title="Populära snapsvisor » Sveriges populäraste snapsvisor finner du här!"
          description="Ta en titt på vår samling av populära snapsvisor. Ta del av vad alla våra besökare tycker är bäst inom snapsvisor här."
        />

        <div className="block">
          <h1>Populära snapsvisor</h1>
          <p>Precis som i allt annat så finns det även snapsvisor som är mer populära än andra. Vad som utgör på våran sida om en snapsvisa hamnar bland våra populära snapsvisor är hur många gånger den lagts till i ett häfte. Självklart har vi alla olika sorters favoriter men det finns ett antal visor som är mer populära än andra. Det finns även snapsvisor som endast sjungs under speciella högtider som till exempel jul, nyår eller midsommar. Men vad vi själva har erfarenhet av så slår dig även de populära snapsvisorna sig in på varje högtid. För egentligen handlar det inte om att man måste sjunga populära snapsvisor för högtiden man firar. Utan det handlar om att man i grupp sjunger och har kul. Det är hela grejen med visorna vi sjunger när vi dricker snaps, det är ett sätt att höja glädjen och göra något tillsammans. Precis som på alla andra kategorier med snapsvisor så kan du även här skapa ett häfte med populära snapsvisor. Ifall du inte har läst hur du gör innan så ska vi gå igenom det lite snabbt för dig. Uppe i högra hörnet på varje snapsvisa finner du ett plustecken. Klickar du på plustecknet så läggs visan i ditt egna snapshäfte. Snapshäftet finner du uppe till vänster på sidan och där kan du snabbt och enkelt skriva ut häftet. Lycka till! Hoppas du blir nöjd!</p>
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

        <Visor category="populara" checkout={this.checkout} />
      </Layout>
    )
  }
}

export default Populara
