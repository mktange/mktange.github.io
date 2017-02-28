import { LayoutNames } from '../../layouts';
import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

import styles from "./index.css"

interface PagesListProps {
  pages: PhenomicPageHead<LayoutNames>[];
}

const PagesList: React.StatelessComponent<PagesListProps> = ({ pages }) => (
  <div>
    { pages.length ? 
    (
      <ul className={ styles.list }>
        {
        pages.map((page) => (
          <li key={ page.title }><PagePreview { ...page } /></li>
        ))
      }
      </ul>
    )
    : "No posts yet."
  }
  </div>
)

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
