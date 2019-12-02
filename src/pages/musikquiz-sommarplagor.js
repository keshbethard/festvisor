import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import spotify from '../images/spotify.png'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Musikquiz Sommarplågor » Quizar där de flesta briljerar!" 
      description="Ett musikquiz med sommarplågor är något de flesta briljerar i. För det finns knappt någon som lyckats undgå dessa låtar. Lägg till dem nu direkt!"
    />
    <div className="block">
      <h1>Musikquiz sommarplågor</h1>
      <p>Sommarplågor, alla har vid något tillfälle avskytt dem för att senare komma på sig själv nynnandes på låtarna. Därför har vi skapat flera olika Musikquiz med sommarplågor. Här finner du listor med sommarplågor från bland annat Per Gessle, Markoolio, Hov1 och många fler. Så nu är det upp till bevis om ni har koll på sommarplågorna som spelats. Dessa musikquizar med sommarplågor passar utmärkt vid alla tillfällen och vi har märkt när vi själva kört dem att de är väldigt uppskattade och framkallar många skratt. Det är alltid någon i sällskapet som uppger sig för att avsky sådana här låtar men som sedan briljerar. För dig som inte riktigt har koll på vad en sommarplåga är så handlar det om låtar som ständigt spelas på radion under hela sommaren. Låtarna är gärna av gladare och festligare sort, enklaste sättet att få reda på vad det är låtar är att bara lägga till en av våra sommarplågor musikquiz till din spotify och lyssna.<br/>
      Ifall du har tänkt köra en musikquiz med sommarplågor på midsommar så kan vi tipsa om våran sida med <Link to="/snapsvisor-midsommar/">midsommar snapsvisor</Link>. En stor samling med snapsvisor till midsommar som du dessutom kan skapa ett häfte med direkt på sidan. </p>
    </div>
    <div className="music-category-blocks">
      <div className="music-category-block-head">
        <h2>Alla 60-talets musikquiz</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
