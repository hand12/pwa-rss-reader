import * as functions from 'firebase-functions'
import { getFeeds, saveFeeds, deleteFeeds } from './feeds'


export const fetchFeeds = functions.pubsub.schedule('00 6 * * *').onRun(async (context) => {
  const feeds = await getFeeds()
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
