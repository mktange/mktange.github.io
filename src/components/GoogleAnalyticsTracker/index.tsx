import React, { Component, PropTypes } from "react"
import ReactGA from "react-ga"

const isProduction = process.env.NODE_ENV === "production"
const isClient = typeof window !== "undefined"

interface GoogleAnalyticsTrackerProps {
  params: any;
}

export default class GoogleAnalyticsTracker extends React.Component<GoogleAnalyticsTrackerProps,{}> {

  static propTypes = {
    children: PropTypes.node,
    params: PropTypes.object.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  componentWillMount() {
    if (isClient) {
      const { pkg } = this.context.metadata
      if (isProduction) {
        ReactGA.initialize(pkg.googleAnalyticsUA)
      }
      else {
        console.info("ga.create", pkg.googleAnalyticsUA)
      }
      this.logPageview()
    }
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview()
    }
  }

  logPageview() {
    if (isClient) {
      if (isProduction) {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      }
      else {
        console.info("New pageview", window.location.href)
      }
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}