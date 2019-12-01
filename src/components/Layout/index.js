import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import annons from '../../images/annons-alcasino.jpg'
import annonsBig from '../../images/annons-alcasino-stor.jpg'

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="page-container">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>
        {children}
        <div className="annons">
          <div className="message name">annons</div>
          <a href="https://alcasino.se/" target="_blank" rel="noopener noreferrer">
            <img className="annons-small" src={annons} alt="Alcasino" title="Alcasino.se™" />
            <img className="annons-big" src={annonsBig} alt="Alcasino" title="Alcasino.se™" /></a>
          <div className="message">Hitta bästa <a href="https://alcasino.se/" target="_blank" rel="noopener noreferrer">casino på nätet</a>.</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
