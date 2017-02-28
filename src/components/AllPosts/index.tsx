import { LayoutNames } from '../../layouts';
import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.css"


const AllPosts: React.StatelessComponent<{}> = (props, { collection }) => {
  const posts = enhanceCollection<LayoutNames>(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  });

  return (
    <div>
      <h3 className={ styles.allPosts }>
        { "Posts" }
      </h3>
      <PagesList pages={ posts } />
    </div>
  )
}

AllPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

AllPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default AllPosts
