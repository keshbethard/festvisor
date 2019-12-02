import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    
    <SEO 
      title="Musikquiz för barn » Perfekt till barnkalaset!"
      description="Låt barnen tävla med hjälp att ett av våra musikquiz för barn. Passar perfekt till barnkalaset och det är simpelt att anordna!"
    />

    <div className="block">
      <h1>Musikquiz för barn</h1>
      <p>Här finner du musicquizar för barn med kända barnlåtar. Låtarna kommer från olika barnprogram och filmer. Men även flera kända barnlåtar från olika artister. Att anordna ett barnkalas är en stor grej i sig. Först och främst vill man planera efter att barnen hela tiden skall ha något att göra så de inte vänder upp och ner på huset. Här har du ett superbra alternativ till att engagera barnen och få dem att sitta stilla en stund. Här kan du välja mellan flera olika spotifylistor med barnlåtar och köra en musikquiz för barnen. Något barn är väldigt duktiga på är att tävla i grupp så dela gärna upp dem i lag. Ett bra tips är att ha en stor godisskål där laget som svarar rätt får ta vars en bit ifrån. Detta har vi märkt är väldigt populärt och det blir en god sammanhållning i gruppen. För att lägga till någon av våra barn musikquiz listor behöver du bara klicka på spotify ikonen sedan är det klart. Nu när kalaset är räddat så får du gärna passa på att gilla oss på Facebook.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla musikquiz för barn</h2>
      </div>

      {/* Klassiker */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Klassiker</h4>
          <a href="https://open.spotify.com/playlist/48wCYwlaFgVO6Iu31Tga6C?si=LdSG_IajTC-hTlB1P5SLGg" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Alice Scherman - Idas sommarvisa</li>
          <li>Pinkfong - Babyshark</li>
          <li>Annika Herlitz - Slå Dig Fri</li>
          <li>Babblarna - Första Låten</li>
          <li>Laila Adele - En värld full av liv</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>Andreas S.</strong></div>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
