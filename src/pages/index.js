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
    <SEO title="Hem" />
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
        <p>Hur uppdateradade är ni om dagens musik?</p>
      </div>
      <div className="block-column two">
        <Link to="/snapsvisor-jul/"><img src={snapsvisorJul} alt="Snapsvisor till jul" title="Snapsvisor till jul" /></Link>
        <h4>Snapsvisor till jul</h4>
        <p>Ut pretium erat quis est ultrices, ut aliquet lacus tempus.</p>
      </div>
      <div className="block-column three">
        <Link to="/snapsvisor-nyar/"><img src={snapsvisorNyar} alt="Snapsvisor till nyår" title="Snapsvisor till nyår" /></Link>
        <h4>Snapsvisor till nyår</h4>
        <p>Ut pretium erat quis est ultrices, ut aliquet lacus tempus.</p>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
      <h3>Musikfrågesport</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et.</p>
    </div>
  </Layout>
)

export default IndexPage
