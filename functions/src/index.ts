import * as functions from 'firebase-functions'
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

import { fetchFeeds, saveFeeds, deleteFeeds } from './feeds'
import { getFeeds } from './api/feeds'


export const updateFeeds = functions.pubsub.schedule('00 6 * * *').onRun(async (context) => {
  const feeds = await fetchFeeds()

  Promise.all([
    saveFeeds(feeds),
    deleteFeeds()
  ])
  .catch((e) => {
    console.error('Error, update feeds')
    console.error(e.message)
  })
  console.log('complete! update feeds')
  return 0
})

export const apiFeedList = functions.https.onRequest(async (req, res) => {
  const feeds = await getFeeds(req.query.genre)

  const allowedOrigins = [
    'http://localhost:3000',
    'https://pwa-rss-reader-bcbc4.web.app/',
    'http://192.168.1.6:3000'
  ]

  const origin = req.headers.origin
  console.log(origin)

  if (origin && typeof origin === 'string' && allowedOrigins.indexOf(origin) > -1) {
    res.set('Access-Control-Allow-Origin', origin)
  }
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.status(200).json(feeds).end()
})
