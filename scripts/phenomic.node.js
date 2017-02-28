import phenomicStatic from "phenomic/lib/static"

import metadata from "../src/metadata"
import routes from "../src/routes"
import store from "../src/store"

export default (options) =>
  phenomicStatic({ ...options, metadata, routes, store })
