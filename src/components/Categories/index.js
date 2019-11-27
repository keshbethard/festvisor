import React from "react"
import { Link } from "gatsby"

import "./categories.scss"

const Categories = () => (
    <div className="block categories">
      <Link to="/snapsvisor/" activeClassName="active">Alla snapsvisor</Link>
      <Link to="/populara-snapsvisor/" activeClassName="active">Populära snapsvisor</Link>
      <Link to="/snapsvisor-jul/" activeClassName="active">Snapsvisor jul</Link>
      <Link to="/snapsvisor-pask/" activeClassName="active">Snapsvisor påsk</Link>
      <Link to="/snapsvisor-kraftskiva/" activeClassName="active">Snapsvisor kräftskiva</Link>
      <Link to="/snapsvisor-midsommar/" activeClassName="active">Snapsvisor midsommar</Link>
      <Link to="/finska-snapsvisor/" activeClassName="active">Finska snapsvisor</Link>
      <Link to="/danska-snapsvisor/" activeClassName="active">Danska snapsvisor</Link>
    </div>
)

export default Categories
