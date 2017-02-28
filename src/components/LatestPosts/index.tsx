import { LayoutNames } from '../../layouts';
import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.css"

const defaultNumberOfPosts = 6

interface LatestPostsProps {
  numberOfPosts?: number;
}

const LatestPosts: React.StatelessComponent<LatestPostsProps> = (props, { collection }) => {
  const latestPosts = enhanceCollection<LayoutNames>(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h3 className={ styles.latestPosts }>
        { "Latest Posts" }
      </h3>
      <PagesList pages={ latestPosts } />
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
