import React, { PropTypes } from "react"

import styles from "./index.pcss"

export interface ButtonProps {
}

const Button: React.StatelessComponent<ButtonProps> = ({ ...otherProps }) => (
  <span role="button" { ...otherProps } className={ "button" }/>
)

Button.propTypes = {
  children: PropTypes.node,
}

Button.displayName = "Button"

export default Button
