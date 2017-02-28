declare module "phenomic/lib/enhance-collection" {
  const enhanceCollection: <T extends string>(collection: any, filter: {
    filter?: PhenomicPageHead<T> | ((header: PhenomicPageHead<T>) => boolean);
    sort?: string;
    reverse?: boolean;
    limit?: number;
  }) => PhenomicPageHead<T>[];
  export default enhanceCollection;
}


interface PhenomicPageMetadata {
  __dataUrl?: string;
  __filename?: string;
  __resourceUrl?: string;
  __url?: string;
}

interface PhenomicPage extends PhenomicPageMetadata {
  isLoading?: boolean;
  head: PhenomicHead;
  body?: string;
  header?: JSX.Element;
  footer?: JSX.Element;
}


interface PhenomicHead {
  title?: string;
  subtitle?: string;
  metaTitle?: string;
  date?: string;
  description?: string;
  comments?: boolean;
  tags?: string;
  layout?: string;
}

interface PhenomicPageHead<LayoutNames> extends PhenomicPageMetadata, PhenomicHead {
}



interface PhenomicCta {
  link: string;
  label: string;
  props: any;
}

interface Window {
  __INITIAL_STATE__: any;
}

declare const __REACT_HOT_LOADER__: any;