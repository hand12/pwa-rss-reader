export interface ProviderType {
  name: string,
  url: string,
  genre: string
}

export const PROVIDERS = [
  {
    name: 'gizmodo',
    url: 'http://feeds.gizmodo.jp/rss/gizmodo/index.xml',
    genre: 'Gadget'
  },
  {
    name: 'toyokeizai',
    url: 'https://toyokeizai.net/list/feed/rss',
    genre: 'Economy'
  }
]

