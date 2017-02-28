import { LayoutNames } from '../../layouts';
import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.pcss"


interface PostsByTagProps {
  params: { tag: string; };
}

const PostsByTag: React.StatelessComponent<PostsByTagProps> = ({ params: { tag } }, { collection }) => {
  const tagPosts = enhanceCollection<LayoutNames>(collection, {
    filter: (item) => item.layout == "Post" && item.tags && item.tags.split(" ").findIndex(t => t == tag) > -1,
    sort: "date",
    reverse: true,
  });

  return (
    <div className={ styles.tagPosts}>
      <h3>
        { "Posts tagged with " }<b>{ "#" + tag }</b>
      </h3>
      <PagesList pages={ tagPosts } />
    </div>
  )
};

PostsByTag.propTypes = {
  tag: PropTypes.string,
}

PostsByTag.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default PostsByTag;
