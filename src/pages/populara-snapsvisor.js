import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"

class Populara extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <SEO title="Populära snapsvisor" />

        <div className="block">
          <h1>Populära snapsvisor</h1>
          <p>Precis som i allt annat så finns det även snapsvisor som är mer populära än andra. Vad som utgör på våran sida om en snapsvisa hamnar bland våra populära snapsvisor är hur många gånger den lagts till i ett häfte. Självklart har vi alla olika sorters favoriter men det finns ett antal visor som är mer populära än andra. Det finns även snapsvisor som endast sjungs under speciella högtider som till exempel jul, nyår eller midsommar. Men vad vi själva har erfarenhet av så slår dig även de populära snapsvisorna sig in på varje högtid. För egentligen handlar det inte om att man måste sjunga populära snapsvisor för högtiden man firar. Utan det handlar om att man i grupp sjunger och har kul. Det är hela grejen med visorna vi sjunger när vi dricker snaps, det är ett sätt att höja glädjen och göra något tillsammans. Precis som på alla andra kategorier med snapsvisor så kan du även här skapa ett häfte med populära snapsvisor. Ifall du inte har läst hur du gör innan så ska vi gå igenom det lite snabbt för dig. Uppe i högra hörnet på varje snapsvisa finner du ett plustecken. Klickar du på plustecknet så läggs visan i ditt egna snapshäfte. Snapshäftet finner du uppe till vänster på sidan och där kan du snabbt och enkelt skriva ut häftet. Lycka till! Hoppas du blir nöjd!</p>
        </div>
    
        <Categories />

        <Visor category="populara" />
      </Layout>
    )
  }
}

export default Populara
