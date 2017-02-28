import React, { PropTypes } from "react"
import Helmet from "react-helmet"

interface DefaultHeadMetaProps {
  meta?: { name?: string, property?: string, content: string }[];
  scripts?: { src: string }[];
  link?: { rel: string, href: string, sizes?: string, type?: string }[];
}

const DefaultHeadMeta: React.StatelessComponent<DefaultHeadMetaProps> = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated" },
        // { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        ...props.scripts ? props.scripts : [],
      ] }
      link={props.link}
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  scripts: PropTypes.arrayOf(PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
