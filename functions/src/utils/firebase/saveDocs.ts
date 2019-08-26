const admin = require('firebase-admin')
const db = admin.firestore()

export const saveDocs = async (collectionRef: any, items: any[], batchSize: number = 500) => {
  const batch = db.batch()

  for (let i = 0; i < items.length; i += batchSize) {
    const saveItems = items.slice(i, i + batchSize)
    saveItems.forEach(saveItem => {
      batch.create(collectionRef.doc(), saveItem)
    })
    await batch.commit()
      .catch((e: Error) => {
        console.error('Error, commit items', saveItems)
      })
  }
}
