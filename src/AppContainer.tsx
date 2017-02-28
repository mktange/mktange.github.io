import React, { PropTypes } from "react"

import "./index.global.pcss"
import "./highlight.global.pcss"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker"


const AppContainer: React.StatelessComponent<{ params: any }> = props => (
  <GoogleAnalyticsTracker params={ props.params }>
    <Container>
      <DefaultHeadMeta 
        scripts={[ 
          { src: "https://use.fontawesome.com/786ef9cc7a.js" } 
        ]}
        meta={[
          { name: "google-site-verification", content: "Lo0KAD1VOmLeYX3xxa46H1Sxg9ds4xFcCZzkKtFy8ow" }
        ]}
        />
      <Header />
      <Content>
        { props.children }
      </Content>
      <Footer />
    </Container>
  </GoogleAnalyticsTracker>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
