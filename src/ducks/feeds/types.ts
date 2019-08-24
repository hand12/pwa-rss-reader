export interface Feed {
  id: string
  genre: string
  provider: string
  title: string
  link: string
  image: string
  pubDate: {
    _seconds: number
  }
  createdAt: Date
}
