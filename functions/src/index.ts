import * as functions from 'firebase-functions'
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

import { fetchFeeds, saveFeeds, deleteFeeds } from './feeds'
import { getFeeds } from './api/feeds'
import PROJECTS from './utils/firebase/projects'


export const updateFeeds = functions.pubsub.schedule('00 22 * * *').onRun(async (context) => {
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
  const project = PROJECTS.find(p => p.id === process.env.GCLOUD_PROJECT)
  if (!project) return res.status(200).json([]).end()

  const feeds = await getFeeds(req.query.genre)

  const allowedOrigins = project.allowedOrigins

  const origin = req.headers.origin

  if (origin && typeof origin === 'string' && allowedOrigins.indexOf(origin) > -1) {
    res.set('Access-Control-Allow-Origin', origin)
  }
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.status(200).json(feeds).end()
})
