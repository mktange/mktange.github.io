import { LayoutNames } from '../../layouts';
import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

import styles from "./index.pcss"


const PagePreview: React.StatelessComponent<PhenomicPageHead<LayoutNames>> = ({ __url, title, date, description, tags }) => {
  const pageDate = date ? new Date(date) : null;

  return (
    <article className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
      <div className={ styles.meta }>
        <span>{
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
        </span>
        <span className={ styles.tagLine }>
        {
          tags && tags.length && tags.split(" ").map(tag => (
            <Link key={tag} to= { `tag/${tag}` } className="tag">#{tag}</Link>
          ))
        }
        </span>
      </div>
      <div className={ styles.description }>
        { description }
        { " " }
      </div>
      <Link to={ __url } className={ styles.readMore }>
        <Button>{ "Read More →" }</Button>
      </Link>
    </article>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
