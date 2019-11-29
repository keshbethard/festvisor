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
        <SEO title="Snapsvisor kräftskiva" />

        <div className="block">
          <h1>Snapsvisor midsommar</h1>
          <p>Sensommaren är här och det vankas kräftskivor. Sjöar och åar fylls med kräftburar medans de lata går till mataffären för att inhandla kräftor. Cyklar ses över så däcken är pumpade och taxichaufförer har på tok för mycket att göra. Bolaget säljer ofantliga mängder av flaskor med snaps. Partytälten sätts upp och pyntas med alla möjliga kräft relaterade prylar. Festen är nu igång och kräftfrossa har börjat. Snapsflaskorna öppnas och det är nu dax för snapsvisor innan snapsen åker ner. Det är precis nu som vi på festvisor kommer in i bilden på kräftskivan. För här är det möjligt för dig att skapa ditt egna häfte med snapsvisor till kräftskivan. Här under ser du ett stort urval av kräftskiva snapsvisor som du enkelt kan skriva ut här på sidan. Visst är det grymt! Välj ut vilka snapsvisor du vill ha på din kräftskiva och printa ut dem direkt. Ett kanonbra sätt att involvera alla i snapsvisorna och festen blir ihågkommen som en av de bättre!</p>
        </div>
    
        <Categories />

        <Visor category="kraftskiva" />

        <div className="block">
          <h2>Kräftskiva</h2>
          <p>När kräftfiskesäsongen drar igång i augusti så betydet det även att det är dax för kräftskiva. En fest som varit tradition väldigt länge i Sverige. Förr i tiden så var man tvungen att fiska upp kräftorna själv för att kunna fira den, medans nuförtiden går det bra att handla kräftor i mataffären. Massvis med partytält sätts upp och dekoreras med alla möjliga sorters kräftdekorationer. Det är kanske inte den mest ögonfallande festdekorationer. Den numera traditionella kräftdukningen består av glas, tallrikar, snapsglas, haklappar och partyhattar. Alla dessa är ofta med ett tryck av en kräfta på. Under kräftskivan är det också tradition att förtära mycket snaps. Det sjungs snapsvisor hej vilt och nubbarna halsas en efter en. Snapsen är så förknippad med kräftskivor så det finns en hel del snapsvisor till kräftskivan. Vilket iofs inte är helt ovanligt i Sverige då denna dryck är vanlig vid fester och när vi firar högtider. </p>
        </div>
      </Layout>
    )
  }
}

export default Kraftskiva
