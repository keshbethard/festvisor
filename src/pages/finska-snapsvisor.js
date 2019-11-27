import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import Visor from "../components/Visor"
import SEO from "../components/seo"

class Finska extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <SEO title="Finska snapsvisor" />

        <div className="block">
          <h1>Finska snapsvisor</h1>
          <p>Här finner du en härlig blandning av finska snapsvisor av bästa kvalité. För har vi tagit med våra grannar i söder så kan vi inte lämna våra grannar i norr utanför. De flesta svenskar vet vad <strong>Ei saa peittää</strong> och <strong>Tomaattiketsuppi</strong> betyder, men har du någonsin provat på finska snapsvisor? Om du aldrig har gjort det har du missat något. Finska snapsvisor bjuder på hysteriska skratt och kan fungera som ett ess i rockärmen när det kommer till roliga snapsvisor. Överraska dina vänner med något nytt vid nästa sammankomst, vi lovar det kommer uppskattas! Och ännu bättre blir det ifall någon vän kan finska och kan briljera under dessa visor. För finnarna är väldigt duktiga på att marknadsföra sig som hårda och att de dricker vodka istället för vatten. Klicka på ikonen uppe i högra hörnet för att lägga till dina finska snapsvisor i ditt häfte. Ifall du tycker det är någon riktigt bra snapsvisa på finska som vi missat får ni gärna skicka in den till oss.</p>
        </div>
    
        <Categories />

        <Visor category="finska" />

        <div className="block">
          <h2>Finska snapsvisor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et. Nulla dapibus volutpat fermentum. Pellentesque accumsan imperdiet faucibus. In malesuada justo metus, nec bibendum urna vulputate a. Sed pretium sem quis semper consectetur. Phasellus ullamcorper nisi sit amet ex imperdiet elementum. Aliquam placerat sem id erat convallis, vulputate suscipit urna elementum.</p>
          <h3>Nubbar</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui justo. Nullam imperdiet enim lorem, congue laoreet dui imperdiet et.</p>
        </div>
      </Layout>
    )
  }
}

export default Finska
