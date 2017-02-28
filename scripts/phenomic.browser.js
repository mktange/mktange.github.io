// Hot loading HRM Patch
import "react-hot-loader/patch"
// fetch polyfill
import "whatwg-fetch"
import phenomicClient from "phenomic/lib/client"

import metadata from "../src/metadata"
import routes from "../src/routes"
import store from "../src/store"

phenomicClient({ metadata, routes, store })

require.context("../content", true, /\.(html|json|txt|ico|jpe?g|png|gif|mp4)$/)

// md files processed via phenomic-loader to JSON & generate collection
let mdContext = require.context("../content", true, /\.(md|markdown)$/)
mdContext.keys().forEach(mdContext)

// hot loading
if (module.hot) {

  // hot load md
  module.hot.accept(mdContext.id, () => {
    mdContext = require.context("../content", true, /\.(md|markdown)$/);
    const mdHotUpdater = require("./fixed-hot-md").default;
    const requireUpdate = mdHotUpdater(mdContext, window.__COLLECTION__, store);
    mdContext.keys().forEach(requireUpdate);
  })

  // hot load app
  module.hot.accept(
    [ "../src/metadata", "../src/routes", "../src/store" ],
    // webpack 1
    () => phenomicClient({
      metadata: require("../src/metadata").default,
      routes: require("../src/routes").default,
      store: require("../src/store").default,
    })
    // webpack 2
    /*
    () => phenomicClient({ metadata, routes, store })
    */
  )
}
