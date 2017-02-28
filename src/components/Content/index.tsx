import React, { PropTypes } from "react"

import styles from "./index.pcss"

const Content: React.StatelessComponent<{}> = (props) => (
  <div className={ styles.content }>
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
