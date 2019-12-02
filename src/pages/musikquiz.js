import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import musikquizBarn from '../images/musikquiz-for-barn.jpg'
import popularaMusikquiz from '../images/populara-musikquiz.jpg'
import svenskaMusikquiz from '../images/svenska-musikquiz.jpg'
import zerotiesMusikquiz from '../images/00-talet-musikquiz.jpg'
import ninetiesMusikquiz from '../images/90-talet-musikquiz.jpg'
import eightiesMusikquiz from '../images/80-talet-musikquiz.jpg'
import seventiesMusikquiz from '../images/70-talet-musikquiz.jpg'
import sixtiesMusikquiz from '../images/60-talet-musikquiz.jpg'
import musikquizSommarplagor from '../images/musikquiz-sommarplagor.jpg'
import rockMusikquiz from '../images/rock-musikquiz.jpg'
import hiphopMusikquiz from '../images/hiphop-musikquiz.jpg'
import ovrigtMusikquiz from '../images/ovrigt.jpg'
import musikquizJul from '../images/musikquiz-jul.jpg'
import musikquizForAldre from '../images/musikquiz-for-aldre.jpg'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Musikquiz » Prova våra populära quiz idag!"
      description="Här finner du ett stort urval av musikquiz som du är igång med på rekordtid! Flera populära kategorier och genrer har vi samlat här."
    />

    <div className="block">
      <h1>Musikquiz</h1>
      <p>Här inne finner du musikquizar som passar alla sorters publik. Och allt vi har här på festvisor.se är gratis, förutom musikquizar har vi även en stor samling av <Link to="/snapsvisor/">snapsvisor</Link>. Vi har Spotifylistor till flera olika kategorier så du enkelt kan välja vilken genre som passar ditt sällskap bäst. Du ser även svårighetsgraden under varje lista, för att förenkla valet av vad som passar er. Vad sägs om en lista full av rock, allt från gamla godingar till nya rocklåtar. Eller kanske ett passande årtionde med låtar ni alla minns. Vi har noggrant valt ut låtar till varje lista, låtar som vi tror många minns från varje årtionde eller genre. Ett tips är att prova olika listor innan du skall hålla i musikquizen. Klicka på Spotify knappen för att lägga till musikquizen “spellistan” till din spotify. Sedan kan du kolla vilka låtar listan innehåller och avgöra om den passar bra eller inte.</p>
    </div>
    <div className="music-blocks">
      <div className="music-block-head">
        <h2>Kategorier</h2>
      </div>
      <Link to="/populara-musikquiz/" className="music-block-column">
        <img src={popularaMusikquiz} alt="Populära musikquiz" title="Populära musikquiz" />
        <h4>Populära musikquiz</h4>
      </Link>
      <Link to="/svenska-musikquiz/" className="music-block-column">
        <img src={svenskaMusikquiz} alt="Svenska musikquiz" title="Svenska musikquiz" />
        <h4>Svenska musikquiz</h4>
      </Link>
      <Link to="/musikquiz-for-barn/" className="music-block-column">
        <img src={musikquizBarn} alt="Musikquiz för barn" title="Musikquiz för barn" />
        <h4>Musikquiz för barn</h4>
      </Link>
      <Link to="/musikquiz-sommarplagor/" className="music-block-column">
        <img src={musikquizSommarplagor} alt="Musikquiz sommarplågor" title="Musikquiz sommarplågor" />
        <h4>Sommarplågor</h4>
      </Link>
      <Link to="/musikquiz-rock/" className="music-block-column">
        <img src={rockMusikquiz} alt="Rock musikquiz" title="Rock musikquiz" />
        <h4>Rock</h4>
      </Link>
      <Link to="/musikquiz-hiphop/"className="music-block-column">
        <img src={hiphopMusikquiz} alt="HipHop musikquiz" title="HipHop musikquiz" />
        <h4>HipHop</h4>
      </Link>
      <Link to="/musikquiz-jul/"className="music-block-column">
        <img src={musikquizJul} alt="Musikquiz jul" title="Musikquiz jul" />
        <h4>Jul</h4>
      </Link>
      <Link to="/musikquiz-for-aldre/" className="music-block-column">
        <img src={musikquizForAldre} alt="Musikquiz för äldre" title="Musikquiz för äldre" />
        <h4>För äldre</h4>
      </Link>
      <Link to="/musikquiz-2000-talet/" className="music-block-column">
        <img src={zerotiesMusikquiz} alt="Musikquiz 2000 talet" title="Musikquiz 2000 talet" />
        <h4>00-talet</h4>
      </Link>
      <Link to="/90-tals-musikquiz/" className="music-block-column">
        <img src={ninetiesMusikquiz} alt="90-talet musikquiz" title="90-talet musikquiz" />
        <h4>90-talet</h4>
      </Link>
      <Link to="/80-tals-musikquiz/" className="music-block-column">
        <img src={eightiesMusikquiz} alt="80-talet musikquiz" title="80-talet musikquiz" />
        <h4>80-talet</h4>
      </Link>
      <Link to="/70-tals-musikquiz/" className="music-block-column">
        <img src={seventiesMusikquiz} alt="70-talet musikquiz" title="70-talet musikquiz" />
        <h4>70-talet</h4>
      </Link>
      <Link to="/60-tals-musikquiz/" className="music-block-column">
        <img src={sixtiesMusikquiz} alt="60-talet musikquiz" title="60-talet musikquiz" />
        <h4>60-talet</h4>
      </Link>
      <Link to="/ovriga-musikquiz/" className="music-block-column">
        <img src={ovrigtMusikquiz} alt="Övrigt" title="Övrigt" />
        <h4>Övrigt</h4>
      </Link>
    </div>
    <div className="block">
      <h2>Musikquiz tävling</h2>
      <p>Att tävla mot varandra i en musikquiz tävling är fruktansvärt roligt! Med endast en spotifylista skapad av oss kan du skapa en fantastisk tävling på bara ett par minuter. Att det är så simpelt är dock inte det bästa, för det bästa är att man kan vara hur många deltagare som helst. Allt som behövs är penna, papper och en av våra listor sedan är tävlingen i full gång. Ett tips till er som är äldre och har tänkt köra en musikquiz på festen. Lägg till i reglerna att för varje gång någon svarar fel får de ta en klunk öl eller annat. Detta ger tävlingen en helt annan dimension och pressen på att svara rätt blir betydligt högre.<br/>
      Vi har själva testat flera utav våra musikquiz listor och de har varit väldigt uppskattade. Så vi hoppas på att även ni uppskattar det. Är det så att du tycker vi gjort ett förbaskat bra jobb får du gärna lämna en like på våran facebooksida, det uppskattar vi.
      </p>
      <h3>Spotify musikquiz</h3>
      <p>Alla våra musikquizar är skapade som spotifylistor. Orsaken till detta är att idag har de flesta i Sverige och skulle du inte ha det kan vi garantera att någon av gästerna har det. Fruktansvärt simpelt och efter du lagt till listan väljer du själv om du vill spara den eller kasta den. Eller varför inte använda en av våra musikquiz listor som grund och skapa en egen där du kan lägga till egna favoriter. </p>
    </div>
  </Layout>
)

export default IndexPage
