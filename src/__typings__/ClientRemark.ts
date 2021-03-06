export default class ClientRemark {
  id: string
  title: string
  text: string
  path: string
  route: string
  postTime: number
  comment: number
  isAutoTranslated: boolean
  availableOtherLocales: string[]
  importedCodes: string
}

export class ClientListItemRemark {
  title: string
  abstract: string
  // e.g.
  // foo/bar/zoo(foo/bar/zoo/article1/en.md)
  path: string
  route: string
  postTime: number
}

export class ClientRemarkMetadata {
  id?: string
  title?: string
  postTime?: string
  abstract?: string
  comment?: number
  isAutoTranslated?: boolean
  // path is relative to examples/
  // e.g. code.js
  codePaths?: any
}
