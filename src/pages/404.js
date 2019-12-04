import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Sidan kunde hittas</h1>
    <p>Sidan du hamnade på existerar inte. Gå tillbaka till <Link to="/">startsidan</Link>.</p>
  </Layout>
)

export default NotFoundPage