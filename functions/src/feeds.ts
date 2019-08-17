const RssParser = require('rss-parser')
const admin = require('firebase-admin')
const db = admin.firestore()
const feedsRef = db.collection('feeds')

interface Item {
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

interface Feed {
  genre: string
  provider: string
  title: string
  link: string
  image: string
  pubDate: Date
  createdAt: Date
}

export const fetchFeeds = async () => {
  const feeds = [
    ...await fetchFeedsFromProvider('gizmodo')
  ]
  console.log('get feeds', feeds)
  return feeds
}

export const saveFeeds = (feeds: Feed[]) => {
  try {
    feeds.map(async feed => await feedsRef.add(feed))
  }
  catch(e) {
    console.log('Error, save feeds', feeds)
    console.error(e.message)
  }
}

export const deleteFeeds = async () => {
  const yesterday = getYesterday()
  const snapshot = await feedsRef.where("createdAt",  "<=", yesterday).get()
  snapshot.docs.forEach((doc: any) => {
    if (doc) { doc.ref.delete() }
  })
  console.log('called deleteFeeds')
}

const getYesterday = () => {
  const now = new Date
  now.setDate(now.getDate() -1)
  now.setHours(23)
  return now
}

const fetchFeedsFromProvider = async (name: string) => {
  const provider = PROVIDERS.find(provider => provider.name === name)
  if (!provider) return []

  const parser = new RssParser()
  let feeds: Feed[]
  try {
    const res = await parser.parseURL(provider.url)
    feeds = res.items.map((item: Item) => {
      return {
        genre: provider.genre,
        provider: provider.name,
        title: item.title,
        link: item.link,
        image: item.enclosure.type === 'image/jpeg' ? item.enclosure.url : '',
        pubDate: new Date(item.pubDate),
        createdAt: new Date
      }
    })
  }
  catch(e) {
    feeds = []
    console.log('Error, parse feeds')
    console.error(e.message)
  }

  return feeds
}

const PROVIDERS = [
  {
    name: 'gizmodo',
    url: 'http://feeds.gizmodo.jp/rss/gizmodo/index.xml',
    genre: 'Gadget'
  }
]
