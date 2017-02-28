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
          { name: "google-site-verification", content: "Lo0KAD1VOmLeYX3xxa46H1Sxg9ds4xFcCZzkKtFy8ow" },
          { name: "msapplication-TileColor", content: "#ffffff" },
          { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png" },
          { name: "theme-color", content: "#ffffff" }
        ]}
        link={[
          { rel: "apple-touch-icon", sizes: "57x57", href: "/icons/apple-icon-57x57.png" },
          { rel: "apple-touch-icon", sizes: "60x60", href: "/icons/apple-icon-60x60.png" },
          { rel: "apple-touch-icon", sizes: "72x72", href: "/icons/apple-icon-72x72.png" },
          { rel: "apple-touch-icon", sizes: "76x76", href: "/icons/apple-icon-76x76.png" },
          { rel: "apple-touch-icon", sizes: "114x114", href: "/icons/apple-icon-114x114.png" },
          { rel: "apple-touch-icon", sizes: "120x120", href: "/icons/apple-icon-120x120.png" },
          { rel: "apple-touch-icon", sizes: "144x144", href: "/icons/apple-icon-144x144.png" },
          { rel: "apple-touch-icon", sizes: "152x152", href: "/icons/apple-icon-152x152.png" },
          { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png" },
          { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
          { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
          { rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png" },
          { rel: "icon", type: "image/png", sizes: "192x192", href: "/icons/android-icon-192x192.png" },
          { rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" },
          { rel: "manifest", href: "/icons/manifest.json" }
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
