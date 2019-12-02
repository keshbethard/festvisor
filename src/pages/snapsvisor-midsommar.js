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
        <SEO 
          title="Snapsvisor midsommar » Höj stämningen vid midsommarbordet nu!" 
          description="Komplett samling av snapsvisor till midsommar hittar du här! Plussa dina favoriter och skriv ut dem direkt!"
        />

        <div className="block">
          <h1>Snapsvisor midsommar</h1>
          <p>Midsommar är en högtid vi förknippar med att vi dansar in sommaren. Folk samlas kring midsommarstången och dansar “små grodorna” och andra visor som förknippas med midsommar. När dansen är över är det dax för midsommarmaten. En sak som är bland de viktigaste på ett midsommarbord är snapsen. Vi sjunger midsommar snapsvisor hej vilt, långt in på natten. Vi har därför samlat vanliga snapsvisor till midsommar och även andra midsommar snapsvisor här på denna sidan. För vad vore midsommar utan snapsvisor och snaps? Det är lite som att sola när regnet öser ner. Det blir ingen bra kombination! Med bara några få klick skapar du ditt eget midsommar snapsvisor häfte som du sedan kan skriva ut. Lägg ett häfte på varje bordsplacering och så är midsommarfesten räddad!</p>
          <i>Klicka på plustecknet uppe i högra hörnet på varje midsommar snapsvisa så läggs den till i ditt häfte. Häftet finner du uppe till vänster.</i>
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

        <Visor category="midsommar" checkout={this.checkout} />

        <div className="block">
          <h2>Midsommar sånghäfte</h2>
          <p>Här på festvisor kan du tyvärr inte skapa ett midsommar sånghäfte som är ämnat till danser kring stången. Här listar vi endast midsommar snapsvisor. Vi har samlat på oss en så stor variation av olika snapsvisor till midsommar så att alla ska finna någon de känner igen. Eller ännu bättre hitta någon ny som du aldrig hört. För är det något man aldrig får glömma när det är dax för midsommarfirande så är det snapsen. Och är det så att du glömt den så kan vi garantera att någon annan i sällskapet har gott om det. För vad vore midsommar snapsvisor om man skulle sitta själv och sjunga dem. Så passa nu på att göra ett fint häfte fullt med snapsvisor så är stämningen vid bordet räddad.</p>
          <h3>Midsommar</h3>
          <p>Midsommar infaller varje år någon gång mellan 19-25 juni. En tradition där vänner och bekanta samlas för att fira sommaren. Den sak som förknippas mest med midsommarfirandet är midsommarstången. Antingen så skapar du din egen midsommarstång hemma eller så finns det ofta en samlingsplats där alla kan dansa runt en midsommarstång tillsammans. Både killar och tjejer bär huvudbonad som kallas för midsommarkrans. Denna krans består av en fin kombination av blommor och blad. När dansen är färdig samlas man för att laga till maten till midsommarbordet. Att laga mat tillsammans är ett utmärkt sätt att umgås på, vilket gör midsommar ännu trevligare. Maten består mestadels av matjessill, gräddfil, dill, köttbullar, lax, ägg, nypotatis och som efterrätt jordgubbar och glass. Inget bord är de andra likt men de flesta innehåller dessa maträtter. En annan sak som är minst lika viktig som maten är snapsen. Flera gånger under tiden man äter så sjungs det midsommar snapsvisor och man tar en nubbe när visan är slut. För många så förknippas midsommar med att dricka alkohol och umgås med vänner. För andra förknippas det med att man firar johannes döparens födelsedag. Denna skaran tror vi dock är betydligt mindre än de som bara firar midsommar.</p>
          <h3>Fördelar med ett häfte av snapsvisor till midsommar</h3>
          <p>Fördelarna med att skapa ett häfte hos till med snapsvisor till midsommar är många. För vi tror att alla har firat midsommar någon gång där det varit brist på bra snapsvisor. Skapar du ett häfte hos oss så slipper du det och helt plötsligt kan alla sjunga med. Vi har själva genom åren gjort som tradition att vi tar med oss ett häfte med snapsvisor till midsommarfesten. Och med facit i hand kan vi säga att de har gjort en stor skillnad för stämningen vid bordet. Alla sjunger med, somliga högre än andra och det blir en helt annan glädje när alla kan vara med.</p>
        </div>
      </Layout>
    )
  }
}

export default Midsommar
