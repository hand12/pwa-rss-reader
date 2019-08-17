import * as functions from 'firebase-functions'
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

import { fetchFeeds, saveFeeds, deleteFeeds } from './feeds'
import { getFeeds } from './api/feeds'


export const updateFeeds = functions.pubsub.schedule('00 6 * * *').onRun(async (context) => {
  const feeds = await fetchFeeds()
  try {
    saveFeeds(feeds)
  }
  catch(e) {
    console.error('Error, fetchFeed')
    console.error(e.message)
    return 0
  }
  deleteFeeds()
  return 0
})

export const apiFeedList = functions.https.onRequest(async (req, res) => {
  const feeds = await getFeeds('Gadget')

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.send(feeds)
})
