import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Sidan kunde hittas</h1>
    <p>Sidan du hamnade på existerar inte. Gå tillbaka till startsidan.</p>
  </Layout>
)

export default NotFoundPage