import React from 'react';

import styles from "./index.pcss";
import cx from 'classnames';

interface LightToggleProps {
  toggleLight: () => any;
}

interface LightToggleState {
  top: number;
}

class LightToggle extends React.Component<LightToggleProps, LightToggleState> {

  constructor() {
    super();
    this.state = { top: this.calcTop() };
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  calcTop() {
    let scrollTop = 
      typeof document !== "undefined" ?
        (document.documentElement && document.documentElement.scrollTop) || 
        document.body.scrollTop
        : 0;
    return scrollTop > 160 ? 10 : (170 - scrollTop)
  }

  handleScroll = (event) => {
    this.setState({
      top: this.calcTop()
    });
  }

  handleClick = (event) => {
    this.props.toggleLight();
  }

  render() {
    return (
      <div className={ styles.container } style={{ top: this.state.top }}>
        <i className={ 
          cx("fa fa-lightbulb-o fa-lg", styles.lightToggle) } onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default LightToggle
