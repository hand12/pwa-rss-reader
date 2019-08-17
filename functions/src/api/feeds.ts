const admin = require('firebase-admin')
const db = admin.firestore()
const feedsRef = db.collection('feeds')

export const getFeeds = async (genre: string) => {
  const snapShot = await feedsRef.where("genre", "==", genre).get()
  return snapShot.docs.map((doc: any) => {
    if (doc) return doc.data()
    else return []
  })
}
