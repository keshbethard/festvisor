import { Link } from "gatsby"
import React from "react"
import logo from '../../images/sjunga-nu.png'

import "./header.scss"

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="festvisor" title="festvisor" />
            </Link>
          </div>
          <div className="menu">
            <Link to="/snapsvisor/" activeClassName="active">
              Snapsvisor
            </Link>

            <Link to="/musikquiz/" activeClassName="active">
              Musikquiz
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
