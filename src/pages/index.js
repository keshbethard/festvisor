import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import musikquizBarn from '../images/musikquiz-for-barn.jpg'
import popularaMusikquiz from '../images/populara-musikquiz.jpg'
import rockMusikquiz from '../images/rock-musikquiz.jpg'
import popularaSnapsvisor from '../images/populara-snapsvisor.jpg'
import snapsvisorJul from '../images/snapsvisor-jul.jpg'
import snapsvisorNyar from '../images/snapsvisor-nyar.jpg'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Välkommen till Festvisor » Vi kan snapsvisor och musikquiz!"
      description="Kika in våra grymma samlingar av snapsvisor och musikquiz! Skriv ut ett häfte med visor eller lägg till musikquizen på under 4 minuter!"
    />
    <div className="front-blocks">
      <div className="block-head">
        <h2>Musikquiz</h2>
        <Link to="/musikquiz/">Se alla kategorier</Link>
      </div>
      <div className="block-column one">
        <Link to="/populara-musikquiz/"><img src={popularaMusikquiz} alt="Populära musikquiz" title="Populära musikquiz" /></Link>
        <h4>Populära musikquiz</h4>
        <p>Populära spellistor från världskända artister.</p>
      </div>
      <div className="block-column two">
        <Link to="/musikquiz-rock/"><img src={rockMusikquiz} alt="Musikquiz rock" title="Musikquiz rock" /></Link>
        <h4>Musikquiz rock</h4>
        <p>Spellistor med populära och mindre kända rockband och artister från olika årtal.</p>
      </div>
      <div className="block-column three">
        <Link to="/musikquiz-for-barn/"><img src={musikquizBarn} alt="Musikquiz för barn" title="Musikquiz för barn" /></Link>
        <h4>Musikquiz för barn</h4>
        <p>Enklare spellistor för de yngre.</p>
      </div>
    </div>

    <div className="block main">
      <div className="main-wrapper">
        <h2>Visor för alla</h2>
        <p>Tusentals sånger och visor för alla tillfällen.</p>
      </div>
    </div>

    <div className="front-blocks">
      <div className="block-head">
        <h2>Snapsvisor</h2>
        <Link to="/snapsvisor/">Se alla snapsvisor</Link>
      </div>
      <div className="block-column one">
        <Link to="/populara-snapsvisor/"><img src={popularaSnapsvisor} alt="Populära snapsvisor" title="Populära snapsvisor" /></Link>
        <h4>Populära snapsvisor</h4>
        <p>Här hittar du alla de mest populära snapvisor.</p>
      </div>
      <div className="block-column two">
        <Link to="/snapsvisor-jul/"><img src={snapsvisorJul} alt="Snapsvisor till jul" title="Snapsvisor till jul" /></Link>
        <h4>Snapsvisor till jul</h4>
        <p>Perfekt utvalda snapsvisor till jul hittar du här.</p>
      </div>
      <div className="block-column three">
        <Link to="/snapsvisor-nyar/"><img src={snapsvisorNyar} alt="Snapsvisor till nyår" title="Snapsvisor till nyår" /></Link>
        <h4>Snapsvisor till nyår</h4>
        <p>Ta del av de bästa snapsvisor till nyår här.</p>
      </div>
    </div>

    <div className="block">
      <h1>Välkommen till festvisor.se</h1>
      <p>Hjärtligt välkommen till festvisor.se! Vårt mål är att hjälpa dig att fixa till stämningen på hemmafesten. Eller varför inte vid firandet av högtider som midsommar, påsk eller julen. Att just fira rejält vid högtider och behålla traditioner är något vi är väldigt duktiga på i Sverige. Vid de flesta högtider samlas vi och dukar upp ett stort bort med plockmat för att sedan sätta oss ner vid matbordet och umgås. Visst är det härligt! Bordet är fint pyntat och de allra finaste pyntet kallas för snaps. Många tycker om den men minst lika många avskyr den. Men ändå dricker vi snapsen för att få vara med på de så omtyckta snapsvisorna. Det finns få stämningshöjare som enkla visor vid matbordet. Det är framförallt här vi kommer in på festvisor.se, vi har samlat <Link to="/snapsvisor/">snapsvisor</Link> från alla världens hörn på ett och samma ställe. Och för att du skall kunna ligga ett steg före vid din bjudning så har vi gjort det möjligt att skapa ditt eget häfte med snapsvisor. Klickar du på loggan i högre hörnet på varje snapsvisa så lägger du visan i "Ditt häfte". När du samlat på dig tillräckligt med visor kan du enkelt trycka in på ditt häfte och skriva ut dina valda snapsvisor. Sådärja nu ligger du ett steg före!</p>
    </div>

    <div className="block main two">
      <div className="main-wrapper">
        <h2>Musikfrågesport</h2>
        <p>Testa era kunskap med väl utvalda spellistor på Spotify.</p>
      </div>
    </div>

    <div className="block">
      <h2>Ta del av noggrant utvalda musikquiz</h2>
      <p>Ifall du är ute efter <Link to="/musikquiz/">musikquiz</Link> skapade med enkla medel så har du kommit rätt. Här på festvisor.se har vi skapat flera olika Spotify listor från olika genrer och årtal. Varför vi just skapat listor i Spotify är för att det är den tjänsten vi kände flest folk har och för vi tycker det inte skall krävas mycket för att anordna en musikquiz tävling. Så länge du har Spotify så kan du utan problem anordna musikquizen vid nästa sammankomst. Vi kommer lägga till nya listor hela tiden och de mest populära finner du överst i listan.</p>
      <h3>Musikfrågesport</h3>
      <p>Att anordna musikfrågesport vid fester eller andra sammankomster är väldig populärt. Tävlingarna arrangeras antingen i lag eller en och en, vi föredrar själva att tävla i lag då det är roligare att tävla tillsammans. Men ifall du tävlar i lag behöver det vara minst 4 deltagare, så är ni mindre än det bör ni tävla var för sig. Man kan använda sig av olika regler och poängsystem vid musikfrågesport. Enklaste reglerna är att den som ropar sitt namn får svara först. Ifall denne svarar fel på frågan går frågan över till motståndarna och ifall även de svarar fel fortsätter man till nästa låt. Rätt svar på artist och låt ger två poäng men om laget bara kan artisten tilldelas bara en poäng. Ett tips är att testa sig fram själv för att se vilket system som fungerar bäst i eran grupp.</p>
    </div>
  </Layout>
)

export default IndexPage
