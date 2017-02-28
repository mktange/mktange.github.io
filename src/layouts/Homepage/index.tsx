import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage: React.StatelessComponent<any> = (props) => {
  return (
    <Page { ...props }>
      <hr />
      <LatestPosts />
    </Page>
  )
}

export default Homepage
