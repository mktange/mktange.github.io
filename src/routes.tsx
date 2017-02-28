import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import layouts from './layouts';
import AppContainer from "./AppContainer"

import PostsByTag from './components/PostsByTag';

const PageContainer: React.StatelessComponent<{}> = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={layouts}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="tag/:tag" component={ PostsByTag } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
