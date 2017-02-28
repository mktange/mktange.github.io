import React, { PropTypes } from "react"

import DisqusThread from "react-disqus-comments"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

import styles from "./index.pcss"



const Post: React.StatelessComponent<PhenomicPage> = (props, { metadata: { pkg } }) => {
  const pageDate = props.head.date ? new Date(props.head.date) : null
  const tags = props.head.tags;

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
            {}
          </header>
        </div>
      }
      footer={ props.head.comments ?
        <div>
          <hr/>
          <DisqusThread
            shortname={pkg.disqus}
            identifier={pkg.homepage + props.__url}
            url={pkg.homepage + props.__url}
          />
        </div>
        : undefined
      }
    >
    </Page>
  )
}

    

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

Post.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Post
