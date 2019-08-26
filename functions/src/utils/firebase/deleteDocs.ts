const admin = require('firebase-admin')

export async function deleteDocs(collectionRef: any, batchSize: number = 500) {
  const firestore = admin.firestore()
  const query = collectionRef.limit(batchSize)
  await deleteQueryBatch(firestore, query, batchSize)
}

async function deleteQueryBatch(firestore: FirebaseFirestore.Firestore, query: any, batchSize: number): Promise<void> {
  const snapshot = await query.get()

  // When there are no documents left, we are done
  if (snapshot.size === 0) {
    console.log('delete complete!')
    return
  }

  // Delete documents in a batch
  const results = await execute(async (batch) => {
    snapshot.docs.forEach((doc: any) => {
      batch.delete(doc.ref)
    })
  })
  console.log(`deleted count: ${results.length}`)
  
  return await deleteQueryBatch(firestore, query, batchSize)
}

export async function execute(f: (batch: any) => Promise<void>): Promise<any[]> {
  const batch = admin.firestore().batch()
  await f(batch)
  return await batch.commit()
}