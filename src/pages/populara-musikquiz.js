import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Populära musikquiz" />
    <div className="block">
      <h1>Populära musikquiz</h1>
      <p>Välkommen till vår samlingssida med våra populära musikquizar. Här finner du alla våra mest använda musikquiz. Tänk på att  ordningen på listorna kan ändras ofta då deras placering är baserad på antalet klick spellistorna får. Så är du osäker på vilken kategori du skall välja när du skall hålla i en musikquiz så kan detta vara ett bra hjälpmedel för dig.  Men tänk på att ifall du hittar en musikquiz som du gillar bör du spara den redan nu. För det är inte säkert den finns på samma placering nästa gång du kommer tillbaka hit.<br/>
      Här är det alltså inte någon specifik kategori utan här kan du finna musikquizar från alla våra kategorier och det är bara de mest populära som hamnar här. Ett tips är att klicka hem spellistorna och kolla igenom dem innan du bestämmer dig för vilken du skall köra. Ifall du inte har tid med det går det bra att följa vilken svårighetsgrad musikquizen har. 
      Ifall du har tänkt anordna en musikquiz på en fest med middagsbjudning så kan vi även tipsa om våra fantastiska samlingar med <Link to="/snapsvisor/">snapsvisor</Link>. Även där har vi en stort urval som är uppdelat på flera olika kategorier.</p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla populära musikquiz</h2>
      </div>

      {/* Coldplay */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>Coldplay</h4>
          <a href="https://open.spotify.com/playlist/66ByiPmZLHt7Fmm1nwItdI?si=HJ4zo1BuSg2MqnVnYbiHjw" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>Coldplay - Speed of Sound</li>
          <li>Coldplay - Hymn for the Weekend</li>
          <li>Coldplay - Til Kingdom Come</li>
          <li>Coldplay - Paradise</li>
          <li>Coldplay - Viva La Vida</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
      </div>

      {/* The Beatles */}
      <div className="music-category-block-column">
        <div className="music-category-block-title">
          <h4>The Beatles</h4>
          <a href="https://open.spotify.com/playlist/3WxmF5suxpge1T5hJjp0js?si=RnzfCL9ERI6Uj9XAW8F5WQ" target="_blank"><img src={spotify} alt="Spotify" title="Spotify" /></a>
        </div>
        <ul>
          <li>The Beatles - Come Together</li>
          <li>The Beatles - In My Life</li>
          <li>The Beatles - Twist And Shout</li>
          <li>The Beatles - Blackbird</li>
          <li>The Beatles - Here Comes The Sun</li>
        </ul>
        <div className="music-category-block-footer">
          <div className="difficulty easy">Lätt</div> 
          <div>Skapad av: <strong>festvisor.se</strong></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
