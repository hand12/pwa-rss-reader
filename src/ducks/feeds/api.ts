export const getFeeds = async (genre: string) => {
  const response = await fetch('https://us-central1-pwa-rss-reader-bcbc4.cloudfunctions.net/apiFeedList')

  return response.json()
}