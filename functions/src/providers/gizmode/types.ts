export interface Item {
  creator: string
  title: string
  link: string
  pubDate: string
  enclosure: {
    type: string
    url: string
  }
  content: string
  contentSnippet: string
  guid: string
  categories: string
  isoDate: string
}