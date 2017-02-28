import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import styles from "./index.pcss"

interface HeaderProps {
}


const Header: React.StatelessComponent<HeaderProps> = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <h1 className={ styles.title }>
      <Link className={ styles.titlelink } to={ "/" }>{ pkg.title }</Link>
    </h1>
    <div className={ styles.subtitle }>{ pkg.subtitle }</div>
    <nav className={ styles.socialNav }>
        {
          pkg.email &&
          <a href={ `mailto:${pkg.email}` } className={ styles.socialBtn }>
            <i className="fa fa-envelope"></i>
          </a>
        }
        {
          pkg.twitter &&
          <a href={ `https://twitter.com/${pkg.twitter}` } target="_blank" className={ styles.socialBtn }>
            <i className="fa fa-twitter fa-lg"></i>
          </a>
        }
        {
          pkg.github &&
          <a href={ `https://github.com/${pkg.github}` } target="_blank" className={ styles.socialBtn }>
            <i className="fa fa-github fa-lg"></i>
          </a>
        }
        {
          pkg.linkedin &&
          <a href={ `https://www.linkedin.com/in/${pkg.linkedin}` } target="_blank" className={ styles.socialBtn }>
            <i className="fa fa-linkedin"></i>
          </a>
        }
    </nav>
    <nav className={ styles.buttonNav }>
      { typeof location !== "undefined" && location.pathname !== "/" &&
        <Link className={ [styles.btn, styles.left].join(' ') } to={ "/" }>
          <i className="fa fa-angle-left"></i>&nbsp; Home
        </Link>
      }
      <Link className={ [styles.btn, styles.right].join(' ') } to={ "/feed.xml" }>
        <i className="fa fa-rss"></i>&nbsp; Subscribe
      </Link>
    </nav>
  </header>
);

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
