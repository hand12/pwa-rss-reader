import { deleteCollection } from './utils/firebase'
import { Converter } from './providers/converter'
import { PROVIDERS } from './providers'

const RssParser = require('rss-parser')
const admin = require('firebase-admin')
const db = admin.firestore()
const feedsRef = db.collection('feeds')

export interface Feed {
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
    ...await fetchFeedsFromProvider('gizmodo'),
    ...await fetchFeedsFromProvider('toyokeizai'),
  ]
  console.log('get feeds', feeds)
  return feeds
}

export const saveFeeds = (feeds: Feed[]) => {
  return Promise.all(
    feeds.map(async feed => await feedsRef.add(feed))
  )
  .catch((e) => {
    console.log('Error, save feeds', feeds)
    console.error(e.message)
  })
}

export const deleteFeeds = async () => {
  const yesterday = getYesterday()
  const yesterdayFeedsRef = await feedsRef.where("createdAt",  "<=", yesterday)
  await deleteCollection(yesterdayFeedsRef)
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

  const res = await parser.parseURL(provider.url).catch((e: any) => {
    console.error('Error parseURL', provider.url)
    console.error(e.message)
  })

  const converter = new Converter(provider.name)
  const feeds = converter.convert(res.items)

  return feeds
}
