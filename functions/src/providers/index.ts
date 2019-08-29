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
    name: 'gadgetTsushin',
    url: 'https://getnews.jp/feed/ext/orig',
    genre: 'Gadget'
  },
  {
    name: 'toyokeizai',
    url: 'https://toyokeizai.net/list/feed/rss',
    genre: 'Economy'
  },
  {
    name: 'goo-business',
    url: 'https://news.goo.ne.jp/rss/topstories/business/index.rdf',
    genre: 'Economy'
  },
  {
    name: 'cnn',
    url: 'http://feeds.cnn.co.jp/rss/cnn/cnn.rdf',
    genre: 'Global'
  },
  {
    name: 'labaq',
    url: 'http://labaq.com/index.rdf',
    genre: 'Global'
  },
  {
    name: 'cnet',
    url: 'http://feeds.japan.cnet.com/rss/cnet/all.rdf',
    genre: 'Technology'
  },
  {
    name: 'techCrunch',
    url: 'https://jp.techcrunch.com/feed/',
    genre: 'Technology'
  },
  {
    name: 'lifehacker',
    url: 'https://www.lifehacker.jp/feed/index.xml',
    genre: 'Life'
  },
  {
    name: 'itlifehack',
    url: 'http://itlifehack.jp/index.rdf',
    genre: 'Life'
  }
]

