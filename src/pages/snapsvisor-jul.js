import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"
import data from '../components/utilities/snapsvisor'

class Jul extends React.Component {
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
        <SEO title="Snapsvisor jul" />

        <div className="block">
          <h1>Snapsvisor jul</h1>
          <p>Bordet är dukat och skinkan är färdiggriljerad. Köttbullarna flödar och prinskorvarna är redo att förtäras. Det är dax för julmiddagen och hela tjocka släkten är samlade, vad passar perfekt vid sådana här högtider? Självklart menar vi snapsen, och till det kommer julsnapsvisor. Skål! Sjung högt och njut av den goda snapsen till julmiddagen, en perfekt kombination! Tycker du inte om snaps går det lika bra att sjunga med i julsnapsvisorna ändå.<br/>
          Här finner du ett stort urval av snapsvisor till jul. Vi har samlat både nya och gamla snapsvisor till julen. För precis som vid andra högtider så åker snapsen fram på bordet i många hushåll även till Jul. Missa inte att du kan göra ditt eget julsnapsvisor häfte här hos oss direkt. Allt du behöver göra är att välja ut vilka julsnapsvisor du tycker om och klicka på ikonen i det högra hörnet på varje snapsvisa. Så lägger du dem i ditt häfte och kan snabbt och enkelt skriva ut dem och lägga dem på bordet innan middagen! Riktigt sjysst tycker vi! Glöm inte bort att allt innehåll här är gratis! Så dela gärna vidare om oss på sociala medier eller bloggar, ja precis var som helst. Det uppskattar vi verkligen!</p>
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

        <Visor category="jul" checkout={this.checkout} />

        <div className="block">
          <h2>Snapsvisor till jul</h2>
          <p>Precis som vid alla andra högtider så finns det snapsvisor som speglar högtiden som är. Det vill säga att man sjunger om saker som har med julen att göra när du firar jul. Och firar du till exempel Påsk så handlar visorna om harar och ägg istället för tomtar och renar som julsnapsvisor ofta gör. Att sjunga snapsvisor inriktade på en högtid är något vi tror är väldigt populärt. Det skapar lite mer julstämning och höjer nöjesfaktorn på festen. Så att skapa ett häfte med julsnapsvisor är något vi verkligen kan rekommendera.</p>
          <h3>Jul</h3>
          <p>Att fira jul är något som alla uppskattar. Det är en högtid som du finner i alla världens hörn. En högtid när hela tjocka släkten samlas för att avnjuta ett härligt julbord. Julbord brukar oftast innehålla köttbullar, prinskorvar, ägg, julskinka, grovbröd och janssons frestelse. Detta är ännu en högtid svenskar föredrar att dricka snaps och sjunga julsnapsvisor vid. Sällskaps- och mysfaktorn vid denna högtid är på den absoluta toppen. När maten är i magen så är det dax för de traditionella Kalle Anka avsnitten på TV. Och när det är slut så inväntar man tomtens ankomst. Tomten kommer med tomtesäcken full av julklappar till både barn och vuxna. När julklapparna är utdelade och öppnade så är det en total chaos då alla öppnar paketen samtidigt och barnen vill testa sina nya leksaker. När kvällen är kommen och barnen funnit ro så spelar väldigt många familjer julklappsspelet. Ett spel där varje deltagare bidrar med en paket eller fler var. Paketen samlas i en hög på bordet, och spelet kan nu starta. Istället för att dela ut paketen är det vanligt att för varje gång en deltagare slår en 6a får de ta ett paket. När högen är slut så ställer man klockan på så länge som spelet får vara. Nu är det riktiga spelet igång och varje gång någon slår en sexa så får de stjäla en paket ifrån någon annan. När klockan sedan ringer så har du vunnit paketen du samlat på dig under spelets gång. Ibland har någon ofantlig tur och lyckas få mer än ett paket. Ett fantastiskt roligt spel att avsluta kvällen med tycker vi!</p>
        </div>
      </Layout>
    )
  }
}

export default Jul
