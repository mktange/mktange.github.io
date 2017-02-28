import React, { PropTypes } from "react"


import LightToggle from '../LightToggle'
import styles from "./index.pcss"

interface ContainerState {
  lightOn: boolean;
}

class Container extends React.Component<{}, ContainerState> { 

  constructor() {
    super();
    let stored = typeof localStorage !== "undefined" ? localStorage.getItem('lightOn') : null;
    this.state = { lightOn: stored == "true" };
  }

  static propTypes = {
    children: PropTypes.node,
  }

  toggleLight = () => {
    let newState = !this.state.lightOn
    this.setState({ lightOn: newState });
    if (typeof localStorage !== "undefined") localStorage.setItem('lightOn', "" + newState);
  }

  render() {
    return (
      <div className={ styles.container + " " + (this.state.lightOn ? "lightTheme" : "darkTheme" ) }>
        <LightToggle toggleLight={this.toggleLight} />
        { this.props.children }
      </div>
    )
  }
}


export default Container;
