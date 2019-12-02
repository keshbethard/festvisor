import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"

class Kraftskiva extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <SEO 
          title="Danska snapsvisor » Spetsa festen med snapsvisor från Danmark!"
          description="Våga testa danska snapsvisor vid nästa fest! Ta en titt och välj ut vilka snapsvisor du tycker passar bäst till festen redan nu!"
        />

        <div className="block">
          <h1>Danska snapsvisor</h1>
          <p>Nu undrar du kanske varför vi har tagit med danska snapsvisor på en svensk hemsida. Då kan vi passa på att berätta att danska snapsvisor är en riktigt stämningshöjare! Alla borde veta vid det här laget att danskarna är duktiga på att tillverka öl. Men de är även väldigt duktiga på att bjuda till fest. Deras fester vid högtider liknar de svenska och danskarna sjunger även de snapsvisor. Så att lägga till en snapsvisa från danmark i ditt häfte blir något speciellt.  Det blir en liten twist vid matbordet där långt ifrån alla förstår vad som sägs och många gånger blir det roliga uttalanden av de danska orden. Just därför har vi även lagt till danska snapsvisor på vår sajt. Vi har testat det själva och det är förbaskat roligt! Men tänk på att om du ska ha dessa visorna i ditt häfte måste du va beredd på att bjuda till det lilla extra och även att en och en annan snaps går till spillo.</p>
        </div>
    
        <Categories />

        <Visor category="danska" />
      </Layout>
    )
  }
}

export default Kraftskiva
