import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Bidra" />
    <div className="block">
        <h1>Cookiepolicy</h1>
        <p>För att förbättra din upplevelse hos oss på Smartval använder vi oss av cookies, web beacons och liknande tekniker (gemensamt kallade ”cookies”).</p>
        <h2>Vad är en cookie?</h2>
        <p>En cookie är en liten textfil (oftast mindre än 1 kB) som sparas i din dator och lagrar information. Cookies används bland annat för att förbättra webbplatsen för användaren.</p>

        <h3>Olika typ av cookies</h3>
        <p>
            ✓ Sessionscookies – tillfälliga cookies som upphör när du stänger din webbläsare.<br/>
            ✓ Varaktiga cookies – cookies som ligger kvar tills du raderar dem eller de upphör att gälla.<br/>
            ✓ Tredjepartscookies – cookies satta av en tredjepartssida.
        </p>
        
        <h2>Cookies vi använder</h2>
        <p>
            ✓ Google Analytics – verktyg som används för att samla in information om statistik och optimering av vår marknadsföring. Här kan du läsa mer om Google Analytics.<br/>
            ✓ Google Tag Manager – verktyg som används för webbanalys genom att bland annat registrera vilka webbsidor besökaren använder sig av.
        </p>
    </div>
  </Layout>
)

export default IndexPage
