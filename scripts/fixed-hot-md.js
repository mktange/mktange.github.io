// eslint-disable-next-line import/no-namespace
import * as pageActions from "phenomic/lib/redux/modules/pages"

function normalize(p) {
  return p.replace(/\\/g, "/");
}

export default (mdContext, collection, store) => (file) => {
  const item = collection.find(
    (item) => normalize(item.__filename) === file.slice("./".length)
  )
  const dataUrl = mdContext(file)
  if (dataUrl !== item.__dataUrl) {
    item.__dataUrl = dataUrl
    console.log(file, " hot update")
    store.dispatch(pageActions.refresh(item.__url, item.__dataUrl))
  }
}
